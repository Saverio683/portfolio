import { lazy, Suspense } from 'react'
import { Route,  Routes } from 'react-router'

import Header from '../components/header/header.component'
import ScrollButton from '../components/scroll-button/scroll-button.component'

import './App.scss'

const HomePage = lazy(() => import('../pages/home/home.page'))

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Suspense fallback={<span>loading...</span>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<span>page not found</span>} />
        </Routes>
      </Suspense>
      <ScrollButton />
    </div>
  )
}

export default App
