"use client"

import { useEffect, useRef, useState } from 'react'
import Chat from './chat.module.css'
import Image from 'next/image'
import SendButton from '../../resources/send-query.png'
import UploadPDFButton from '../../resources/upload-pdf.png'
import Cookies from 'js-cookie'
import { FetchChatConversation, storeQueryAnswer } from '../../server/serverActions'

export interface Chats {
    query: string,
    answer: string
}

export default function ChatPage () {
    const [chats, setChats] = useState <Chats[]> ([])
    async function fetchChat () {
        const username = Cookies.get ('username')
        let response: any = undefined
        if (username) {
            response = await FetchChatConversation (username)
            let newChats: Chats[] = []
            response?.forEach ((chat: any) => {
                newChats.push ({
                    query: chat.query,
                    answer: chat.answer
                })
            })
            if (newChats.length === chats.length)
                return
            else {
                setChats (newChats)
                if (chatScroller.current)
                    chatScroller.current.scrollTop = chatScroller.current.scrollHeight
            }
        }
    }

    useEffect (() => {
        setLoading (true)
        const auth = Cookies.get ('authenticated')
        if (!auth)
            window.location.href = '/'

        fetchChat ()
        setLoading (false)
    }, [fetchChat])

    const [query, setQuery] = useState ('')
    const [fetched, setFetched] = useState (true)
    const [loading, setLoading] = useState (true)
    const [tempQuery, setTempQuery] = useState ('')
    const chatScroller = useRef <HTMLDivElement> (null)
    const fileInput = useRef <HTMLInputElement> (null)
    const dropDownArrow = useRef <HTMLDivElement> (null)
    const [modelSelection, setModelSelection] = useState ('descriptive')

    async function sendQueryServer () {
        if (query === '')
            return
        setTempQuery (query)
        setQuery ('')
        setFetched (false)

        const username = Cookies.get ('username')
        if (username) {
            if (chatScroller.current)
                chatScroller.current.scrollTop = chatScroller.current.scrollHeight
            await storeQueryAnswer (username, query, modelSelection)
            setFetched (true)
        }
    }

    return (
        <div className={Chat.mainContainer}>
            {loading && <div className={Chat.loading}>
                <div className={Chat.loader}></div>
            </div>}
            {!loading && <div className={Chat.container}>
                <div className={Chat.chats}>
                </div>
                <div className={Chat.chat}>
                    <div className={Chat.chatBody}>
                        <div className={Chat.chatHeader}>
                            <div className={Chat.selectDropdown} ref={dropDownArrow}>
                                <select
                                    className={Chat.selectOption}
                                    value={modelSelection}
                                    onChange={(e) => {setModelSelection (e.target.value)}}
                                >
                                    <option value="descriptive">Descriptive</option>
                                    <option value="summarization">Summarization</option>
                                </select>
                            </div>
                            <div 
                                className={Chat.selectOptionArrow}
                                onClick={() => {
                                    if (dropDownArrow.current)
                                        dropDownArrow.current.click ()
                                }}>
                                <div className={Chat.arrow}></div>
                            </div>
                            {modelSelection === 'summarization' && <div className={Chat.fileUpload}>
                                <div
                                    className={Chat.fileUploadButton}
                                    onClick={() => {
                                        if (fileInput.current) 
                                            fileInput.current.click ()
                                    }}>
                                        <Image 
                                            src={UploadPDFButton}  
                                            alt=''  
                                            height={18}
                                            width={18}
                                        />
                                </div>
                                <input
                                    ref={fileInput}
                                    type='file'
                                    accept='.pdf'
                                    style={{ display: 'none' }}
                                    onChange={(e) => {
                                        const selectedFile = e.target.files?.[0];
                                    }}
                                />
                            </div>}
                        </div>
                        <div ref={chatScroller} className={Chat.chatReply}>
                            {chats.map ((chat, index) => {
                                return <div key={index} className={Chat.messagePair}>
                                    <div className={Chat.messageUser}>
                                        {chat.query}
                                    </div>
                                    <div className={chat.answer.includes ('Error code: 0xM1TR0001') ? Chat.messagelLamaError : Chat.messageLlama}>
                                        {chat.answer}
                                    </div>
                                </div>
                            })}
                            {!fetched && <div className={Chat.messagePair}>
                                <div className={Chat.messageUser}>
                                    {tempQuery}
                                </div>
                                <div className={Chat.messageLlama}>
                                    <div className={Chat.loadingMessage}>
                                        <div className={Chat.loaderMessage}></div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className={Chat.promptSection}>
                            <input 
                                className={Chat.chatInput}
                                type='text'
                                value={query}
                                placeholder='Send a message'
                                onChange={(e) => setQuery (e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') 
                                        sendQueryServer ()
                                }}
                            />
                            <div className={Chat.chatSend} onClick={sendQueryServer}>
                                <Image 
                                    src={SendButton} 
                                    id={Chat.sendbutton}
                                    width={20} 
                                    height={20} 
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}