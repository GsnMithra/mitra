"use client"

import { useEffect, useState } from 'react';
import Chat from './chat.module.css'
import Image from 'next/image';
import SendButton from '../../resources/send-query.png'
import Cookies from 'js-cookie';

export default function ChatPage () {

    useEffect (() => {
        const auth = Cookies.get ('authenticated');
        if (!auth) {
            window.location.href = '/';
        }
    }, []);

    const [loading, setLoading] = useState (true);
    const [query, setQuery] = useState ('');

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

                    </div>
                    <div className={Chat.chatfooter}>
                        <input 
                            className={Chat.chatinput}
                            type='text'
                            value={query}
                            placeholder='Send a message'
                            onChange={(e) => setQuery (e.target.value)}
                        />
                        <div className={Chat.chatsend}>
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
    );
}