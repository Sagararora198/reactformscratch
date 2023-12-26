import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData() 
    // const [data,setData] = useState()
    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/Sagararora198')
    //     .then(resp=> resp.json())
    //     .then(dta =>{
            
    //         setData(dta)
    //     })
    // },[])
  return (
    <div className='text-centre m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github name: {data.login}
    </div>
  )
}

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Sagararora198')
    return response.json()
}
