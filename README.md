
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## This is a very, very early build

## Getting Started

Firstly we need a quantized model of LLaMA to feed it into `LlamaCpp`

We can download the model from `https://ai.meta.com/llama/`

We need to quantize the model file to make it lighter and less resource hungry.


Quantize the model:
```bash
https://github.com/ggerganov/llama.cpp
cd llama.cpp

python3 convert.py --outfile output-model.bin --outtype f16 <downloaded-model-directory>
./quantize output-model.bin output-model-quantized.bin q4_0
```

Test the model:
```bash
touch test-prompt.txt
echo "This is some text to write to a file." > test-prompt.txt
./main -m output-model.bin -n <int:max_tokens> <additional-args> -f test-prompt.txt
```

Run the Flask model:
```bash
python3 ./server/llama.py
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
