

import UserContextProvider from './context/UserContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {
  

  return (
    <>
    <h1>hrer</h1>
      <UserContextProvider>
        <h1>Context </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
