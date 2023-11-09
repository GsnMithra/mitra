"use client"

import { useEffect, useRef, useState } from 'react'
import Chat from './chat.module.css'
import Image from 'next/image'
import SendButton from '../../resources/send-query.png'
import UploadPDFButton from '../../resources/upload-pdf.png'
import Cookies from 'js-cookie'
import ToggleButton from '../../resources/ToggleColorMode/ToggleButton'
import { FetchChatConversation, storeQueryAnswer, clearCurrentChat } from '../../server/serverActions'

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
        if (darkTheme) 
            document.querySelector ('body')?.setAttribute ('mitra-theme', 'dark')
        else
            document.querySelector ('body')?.setAttribute ('mitra-theme', 'light')

        fetchChat ()
        setLoading (false)
    }, [fetchChat])

    const [query, setQuery] = useState ('')
    const [fetched, setFetched] = useState (true)
    const [loading, setLoading] = useState (true)
    const [tempQuery, setTempQuery] = useState ('')
    const [darkTheme, setDarkTheme] = useState (window?.matchMedia('(prefers-color-scheme: dark)').matches)
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
            await storeQueryAnswer (username, query, modelSelection, undefined)
            setFetched (true)
        }
    }

    return (
        <div className={Chat.mainContainer}>
            {chats.length === 0 && tempQuery.length === 0 && <div className={Chat.gettingStarted}>
                <div className={Chat.gettingStartedTitle}>Mitra</div>
                {modelSelection === 'descriptive' && <div className={Chat.gettingStartedContent}>Get started by asking questions</div>}
                {modelSelection === 'summarization' && <div className={Chat.gettingStartedContent}>Get content summarized by sending a message or uploading a file</div>}
            </div>}
            {loading && <div className={Chat.loading}>
                <div className={Chat.loader}></div>
            </div>}
            {!loading && <div className={Chat.container}>
                <div className={Chat.chats}>
                    <div className={Chat.chatsHeader}>
                        <div className={Chat.chatsTitle}>Chats</div>
                        <div className={Chat.createChat}>New Chat</div>
                    </div>
                    <div className={Chat.chatsBody}>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                        <div className={Chat.singleChatContainer}></div>
                    </div>
                    <div className={Chat.chatsFooter}>
                    </div>
                </div>
                <div className={Chat.chat}>
                    <div className={Chat.chatBody}>
                        <div className={Chat.chatHeader}>
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
                                        const selectedFile = e.target.files?.[0]
                                        const formData = new FormData ()
                                        if (selectedFile)
                                            formData.append ('file', selectedFile)
                                        const username = Cookies.get ('username')
                                        if (username) {
                                            storeQueryAnswer (username, 'PDF Summary...', modelSelection, formData)
                                            setTempQuery ('Summarizing file...')
                                            setLoading (true)
                                            fetchChat ()
                                        }
                                    }}
                                />
                            </div>}
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
                            <div 
                                className={Chat.clearChatButton} 
                                onClick={() => {
                                    let username = Cookies.get ('username')
                                    if (username)
                                        clearCurrentChat (username)
                                    fetchChat ()
                                    setTempQuery ('')
                                    setChats ([])
                                }}>
                                Clear Chat
                            </div>
                            <div className={Chat.modeChange}>
                                <ToggleButton checked={darkTheme} onClick={() => {setDarkTheme (!darkTheme)}}/>
                            </div>
                        </div>
                        <div ref={chatScroller} className={Chat.chatReply}>
                            {chats.map ((chat, index) => {
                                return <div key={index} className={Chat.messagePair}>
                                    <div className={Chat.messageUser}>
                                        {chat.query}
                                    </div>
                                    <div className={chat.answer.includes ('Error code: 0xM1TR0001') ? Chat.messageLlamaError : Chat.messageLlama}>
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