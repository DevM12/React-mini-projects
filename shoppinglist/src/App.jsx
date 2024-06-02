import { useState } from 'react'

import ProfileCard from './ProfileCard'

//importing images
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

//bulma
import 'bulma/css/bulma.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal digital assistance!</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                imgSrc={AlexaImg}
                description='Alexa was created by Amazon and helps you to buy new things online'
              /></div>
            <div className="column is-4">
              <ProfileCard 
              title='Cortana' 
              handle='@cortana99' 
              imgSrc={CortanaImg} 
              description='Cortana was made by Microsoft and it works like Google Assistant'
              /></div>
            <div className="column is-4">
              <ProfileCard 
              title='Siri' 
              handle='@siri99' 
              imgSrc={SiriImg} 
              description='Siri was made ny Apple and is being phased out'
              /></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
