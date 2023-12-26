import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext)

  if (!user) return <>Please Login</>
  return <>Welcome {user.username}</>
  
}
