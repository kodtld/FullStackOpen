import { useState } from "react"
import { setNotification } from '../reducers/notifSlice'
import { createNew } from "../reducers/anecdoteSlice"
import { connect } from 'react-redux'

const AnForm = (props) => {
  const [newAnecdote,setNewAnecdote] = useState("")
  const handleNewAnectode = (event) =>{
    setNewAnecdote(event.target.value)
  }

  const addNew = async (event) => {
    event.preventDefault()
    props.createNew(newAnecdote)
    props.setNotification(`'${newAnecdote}' was added!`,5)
    setNewAnecdote("")
  }


  return(  
    <form onSubmit={addNew}>    
    <div><input onChange={handleNewAnectode}/></div>
    <button type='submit'>create</button>
    </form>)
}

export default connect(null, {createNew, setNotification} )(AnForm) 