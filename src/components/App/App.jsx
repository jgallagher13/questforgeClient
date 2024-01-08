import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../../utilities/user-services'
import AuthPage from '../Auth/AuthPage/AuthPage'
import NavBar from '../NavBar/NavBar'
import MainPage from '../MainPage/MainPage'
import QuestsPage from '../QuestsPage/QuestsPage'
import ForgePage from '../ForgePage/ForgePage'
import ForgeQuizPage from '../ForgeQuizPage/ForgeQuizPage'
import ForgeCardsPage from '../ForgeCardsPage/ForgeCardsPage'

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<MainPage user={user}/>} />
            <Route path='/quests' element={<QuestsPage />} />
            <Route path='/forgequest' element={<ForgePage />} />
            <Route path='/forgequiz' element={<ForgeQuizPage />} />
            <Route path='/forgecards' element={<ForgeCardsPage />} />
          </Routes>
        </> :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
