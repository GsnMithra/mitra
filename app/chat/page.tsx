"use client"

import { useEffect, useState } from 'react'
import Chat from './chat.module.css'
import Image from 'next/image'
import SendButton from '../../resources/send-query.png'
import Cookies from 'js-cookie'
import { storeQueryAnswer } from '../../server/serverActions'

export default function ChatPage () {
    useEffect (() => {
        setLoading (true)
        const auth = Cookies.get ('authenticated')
        if (!auth) {
            window.location.href = '/'
        }
        setLoading (false)
    }, [])

    const [loading, setLoading] = useState (true)
    const [query, setQuery] = useState ('')
    const [reply, setReply] = useState ('')
    const [tempQuery, setTempQuery] = useState ('')

    async function sendQueryServer () {
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
                            <div className={Chat.messageuser}>
                                {tempQuery}
                            </div>
                            <div className={Chat.messagellama}>
                                {reply}
                            </div>
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