"use client"

import Entry from './page.module.css'
import { useState } from 'react'
import { loginUser } from '../server/serverActions.ts'

export default function Home () {
  const [loginState, setLoginState] = useState (false)
  const changeModeLogin = () => {
    setLoginState (!loginState);
  }
  const [username, setUsername] = useState ('')
  const [password, setPassword] = useState ('')
  async function UsernameLogin () {
    if (username == '' || password == '')
      return;
    const reply = await loginUser (username, password);
    if (reply?.exist && reply.credentials) {
      window.location.href = '/chat';
    } else if (reply?.exist) {
      alert ('Incorrect Password');
    } else {
      alert ('Username does not exist');
    }

    console.log (reply);
  }

  return (
    <div className={Entry.main}>
      <div className={Entry.description}>
        <div className={Entry.intro}>
          {/* <Image 
            id={Entry.logo}
            src={Logo}
            alt='Mitra Logo'
            height={175}
            width={175}
          /> */}
          <p id={Entry.title}>Meet Mitra,</p>
          <p id={Entry.desc}>Powerhouse driven by a large language model. Get ready for engaging conversations, lightning-fast summaries, and expert coding assistance.</p>
        </div>
        <div className={Entry.information}>
          <div className={Entry.exampletitle}>
            What can Mitra help you with?
          </div>
          <div className={Entry.examplecontent}>
            Mitra offers support in summarization, coding, questions, language translation, knowledge sharing, problem-solving, content generation, recommendations, user guidance, and friendly conversations.          </div>
        </div>
      </div>
      {!loginState && <div className={Entry.getstarted}>
        <div className={Entry.prompt}>
          <div className={Entry.getstartedtitle}>
            Get started with Mitra
          </div>
          <div className={Entry.getstartedcontent}>
            Create yourself a Mitra account or log in if you already have one.
          </div>
          <div className={Entry.logsign}>
            <div className={Entry.login} onClick={changeModeLogin}>
              Login
            </div>
            <div className={Entry.signup}>
              Sign Up
            </div>
          </div>
        </div>
      </div>}
      {loginState && <div className={Entry.getstarted}>
        <div className={`${Entry.prompt} ${Entry.inputcontainer}`}>
          <div id={Entry.logincontainer}>
            <div id={Entry.title}>
              Login
            </div>
          </div>
          <input 
            className={Entry.inputfield}
            type='text'
            value={username}
            onChange={(e) => setUsername (e.target.value)}
            placeholder='Username'
          />
          <input 
            className={Entry.inputfield}
            type='password'
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            placeholder='Password'
          />
          <div className={Entry.navigation}>
            <div className={Entry.login} onClick={UsernameLogin}>
                Login
            </div>
            <div className={Entry.login} onClick={changeModeLogin}>
                Back
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}
