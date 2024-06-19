import React from 'react'
import './App.css'
import WatchoverFooter from './component/WatchoverFooter'
import Header from './component/Header'
import SignUp from './component/SignUp'
import Login from './component/Login'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Explore from './component/Explore'
import ForumDiscussion from './component/ForumDiscussion'
import Community from './component/Community'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      {/* <Community/> */}
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/community' element={<Community/>}></Route>
        <Route path='/forumdiscussion' element={<ForumDiscussion/>}></Route>
      </Routes>
      <WatchoverFooter/>
      </BrowserRouter>
    </div>
  )
}

export default App;