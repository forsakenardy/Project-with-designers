import './App.css'
import HomePage from './components/HomePage'
import CategoryDresses from './components/CategoryDresses'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
      <Route>
    <HomePage />
    <CategoryDresses/>
      </Route>
    </Routes>
    </>
  )
}

export default App
