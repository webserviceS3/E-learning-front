import React, { useEffect } from 'react'

import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'

const chatComponent = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if (localStorage.getItem("role") === "ROLE_ADMIN") {
      navigate("/")
    }
  })
  return (
    <ChatEngine
      publicKey={'e325e1b3-7843-4cfc-8711-91b41e096555'}
      userName={localStorage.getItem("username")}
      userSecret={'1234'}
    />
  )
}
export default chatComponent
