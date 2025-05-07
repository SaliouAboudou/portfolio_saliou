import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Base from './components/layouts/Base'

function App() {

  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Base/> }></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
