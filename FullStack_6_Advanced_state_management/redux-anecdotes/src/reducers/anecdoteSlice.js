import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../services/anecdotes'

export const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers:{
        appendAnecdote(state, action) {
            console.log("append", action.payload)
            state.push(action.payload)
          },
        
        setAnecdototes(state, action) {
            return action.payload
          },
        vote: (state, action) => {
            const id = action.payload
            return state.map(blog =>
                blog.id !== id.id ? blog : id
        )
        }
    }
});

export const {vote,appendAnecdote,setAnecdototes} = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
    return async dispatch => {
      const notes = await anecdoteService.getAll()
      dispatch(setAnecdototes(notes))
    }
  }
  
export const createNew = content => {
    return async dispatch => {
      const newAnecdote = await anecdoteService.pushNew(content)
      dispatch(appendAnecdote(newAnecdote))
    }
  }

export const voteAnecdote = (id, update) => {
    console.log(update)
    const updatedAnecdote = { 
      ...update, 
      votes: update.votes + 1 
    }
    return async dispatch => {
      const anecdote = await anecdoteService.voteAnecdote(id,updatedAnecdote)
      dispatch(vote(anecdote))
    }
  }

export default anecdoteSlice.reducer;