"use client"

import { use, useEffect, useState } from 'react'
import Chat from './chat.module.css'
import Image from 'next/image'
import SendButton from '../../resources/send-query.png'
import Cookies from 'js-cookie'
import { FetchChatConversation, storeQueryAnswer } from '../../server/serverActions'

export interface Chats {
    query: string,
    answer: string
}

export default function ChatPage () {

    async function fetchChat () {
        const username = Cookies.get ('username')
        let response: any = undefined
        if (username)
            response = await FetchChatConversation (username)
        let chats: Chats[] = [];
        response?.forEach ((chat: any) => {
            chats.push ({
                query: chat.query,
                answer: chat.answer
            })
        })
        setChats (chats)
    }

    useEffect (() => {
        setLoading (true)
        const auth = Cookies.get ('authenticated')
        if (!auth) {
            window.location.href = '/'
        }

        const username = Cookies.get ('username')
        if (username) 
            fetchChat ();
        setLoading (false)
    }, [fetchChat])

    const [loading, setLoading] = useState (true)
    const [query, setQuery] = useState ('')
    const [reply, setReply] = useState ('')
    const [tempQuery, setTempQuery] = useState ('')
    const [chats, setChats] = useState <Chats[]> ([])

    async function sendQueryServer () {
        if (query === '')
            return
        setTempQuery (query)
        setQuery ('')
        const username = Cookies.get ('username')

        let response: any = undefined
        if (username)
            response = await storeQueryAnswer (username, query)
        setReply (response)
    }

    return (
        <div className={Chat.maincontainer}>
            {loading && <div className={Chat.loading}>
                <div className={Chat.loader}></div>
            </div>}
            {!loading && <div className={Chat.container}>
                <div className={Chat.chats}>

                </div>
                <div className={Chat.chat}>
                    <div className={Chat.chatheader}>
                    </div>
                    <div className={Chat.chatbody}>
                        <div className={Chat.chatreply}>
                            {chats.map ((chat, index) => {
                                return <div key={index} className={Chat.messagepair}>
                                    <div className={Chat.messageuser}>
                                        {chat.query}
                                    </div>
                                    <div className={chat.answer.includes('Error code: 0xM1TR0001') ? Chat.messagellamaerror : Chat.messagellama}>
                                        {chat.answer}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className={Chat.chatfooter}>
                        <input 
                            className={Chat.chatinput}
                            type='text'
                            value={query}
                            placeholder='Send a message'
                            onChange={(e) => setQuery (e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    sendQueryServer ()
                            }}
                        />
                        <div className={Chat.chatsend} onClick={sendQueryServer}>
                            <Image 
                                src={SendButton} 
                                id={Chat.sendbutton}
                                width={30} 
                                height={30} 
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}