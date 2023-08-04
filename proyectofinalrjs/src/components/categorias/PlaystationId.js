import React from 'react'
import { useParams } from 'react-router-dom'

const PlaystationId = () => {
      const {id} = useParams ()
  return (
    <div>
      <h1> soy el Playstation ID</h1>
      <p> espero funcione la xuxaaa {id}</p>
    </div>
  )
}

export default PlaystationId
