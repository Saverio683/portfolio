import Header from '../components/header/header.component'
import ScrollButton from '../components/scroll-button/scroll-button.component'
import HomePage from '../pages/home/home.page'

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <HomePage />
      <ScrollButton />
    </div>
  )
}

export default App
