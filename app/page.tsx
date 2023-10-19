import Image from 'next/image'
import Logo from '../resources/mitra-logo.gif'
import Entry from './page.module.css'

export default function Home() {
  return (
    <div className={Entry.main}>
      <div className={Entry.description}>
        <div className={Entry.intro}>
          <Image 
            id={Entry.logo}
            src={Logo}
            alt='Mitra Logo'
            height={175}
            width={175}
          />
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
      <div className={Entry.logsign}>
        Login, Signup
      </div>
    </div>
  )
}
