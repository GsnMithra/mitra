"use client"

import { useEffect, useState } from 'react';
import Chat from './chat.module.css'
import Image from 'next/image';
import SendButton from '../../resources/send-query.png'
import Cookies from 'js-cookie';

export default function ChatPage () {

    useEffect (() => {
        setLoading (true);
        const auth = Cookies.get ('authenticated');
        if (!auth) {
            window.location.href = '/';
        }
        setLoading (false);
    }, []);

    const [loading, setLoading] = useState (true);
    const [query, setQuery] = useState ('');
    const [temp, setTemp] = useState ('');

    const setTempQuery = (query: string) => {
        setTemp (query);
        setQuery (query);
    }

    const sendQueryServer = () => {
        setTemp ('');
        const pair = sendQuery (query);
        setQuery ('');
        
    }

    const sendQuery = (question: string) => {
        fetch ('http://127.0.0.1:5000/llama', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                question: question
            })
        }).then (res => {
            if (!res.ok) 
                throw new Error ('Error');
            return res.json ();
        }).catch (err => {});
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
                        {}
                    </div>
                    <div className={Chat.chatfooter}>
                        <input 
                            className={Chat.chatinput}
                            type='text'
                            value={temp}
                            placeholder='Send a message'
                            onChange={(e) => setTempQuery (e.target.value)}
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
    );
}