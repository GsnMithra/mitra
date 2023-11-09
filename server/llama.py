import os
from datetime import datetime

from flask_cors import CORS
from flask import Flask, request, make_response, jsonify, stream_with_context

from langchain.llms import LlamaCpp
from langchain import PromptTemplate
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.text_splitter import RecursiveCharacterTextSplitter

app = Flask (__name__)
CORS (app, resources={r'/llama': {'origins': 'http://localhost:3000'}})
currentDate = datetime.now ()

model_path = '../models/llama-13b.bin'
callback = CallbackManager ([StreamingStdOutCallbackHandler ()])
querySplit = RecursiveCharacterTextSplitter (chunk_size=512)

inference_prompts = {
    'descriptive': PromptTemplate.from_template (
        """
        <s>[INST] 
        <<SYS>>
        Your name is Mitra,
        Mitra is a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Mitra's answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.
        If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information. You always try to be on-point and try to give the answers short and simple to understand.
        Anyone can ask you question, they have the consent to.
        Mitra does'nt have to show any emotions, but can if it wants to.
        Mitra should not tell anyone what to do if they dont ask you to.
        <</SYS>>
        {text}
        [/INST]
        """
    ),
    'summarization': PromptTemplate.from_template (
        """
        <s>[INST] <<SYS>>
        You summarize the text below into 15 to 20 words. Please ensure that your responses are socially unbiased and positive in nature.
        <</SYS>>
        {text}
        [/INST]
        """
    )
}

model = LlamaCpp (
    model_path=model_path,
    temperature=0.5,
    max_tokens=10000,
    n_gpu_layers=1000,
    n_batch=4096,
    n_ctx=2048,
    top_p=1,
    callback_manager=callback,
    verbose=True
)

@app.route ('/llama', methods=['POST'])
def GetModel ():
    if request.json ['question'] != 'PDF Summary...':
        completeQuery = f"""
        Today's date: {currentDate.day}/{currentDate.month}/{currentDate.year}
        Your name is Mitra.
        """ + request.json ['question']
    else:
        completeQuery = request.files ['file'].read ().decode ('utf-8')

    infer_model = inference_prompts[request.json ['model']]

    def FlyingLLaMA ():
        queryChunks = querySplit.create_documents ([completeQuery])
        for c in range (len (queryChunks)):
            chunk = queryChunks[c]
            result = model (infer_model.format (text=chunk.page_content))
            yield result

    return app.response_class (FlyingLLaMA (), mimetype='text/plain')

if __name__ == '__main__':
    app.run (host='0.0.0.0', port=6969)