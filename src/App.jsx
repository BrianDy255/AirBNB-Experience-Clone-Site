import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "../components/Navbar"
import Hero from '../components/Hero'
import Card from '../components/card'
import data from "./data"

function App() {
  const [count, setCount] = useState(0)
  const cardData = data.map((item) => {
    return <Card 
      key={item.id}
      item={item}

    />
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className='cards-list'>
        {cardData}
      </section>
    </div>
  )
}

export default App
