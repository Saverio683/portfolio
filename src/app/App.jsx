import Header from '../components/header/header.component'
import HomePage from '../pages/home/home.page'

import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <SpeedInsights /> 
      <Analytics />
      <Header />
      <HomePage />
    </div>
  )
}

export default App
