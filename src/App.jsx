import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import Authorization from './components/Authorization/Authorization'
import Loading from 'src/components/Loading/Loading'

function App() {
  console.log(111)
  return (
    <div className="App">
      <Routes />
      <Loading />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
