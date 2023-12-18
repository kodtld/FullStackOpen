import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { voteAnecdote} from '../reducers/anecdoteSlice'
import { setNotification } from '../reducers/notifSlice'

const AnList = (props) =>{
    const dispatch = useDispatch()
    const unsortedAnecdotes = useSelector(state => state.anecdoteSlice)
    
    const voter = (anecdote) => {
      console.log("app voter",anecdote.id)
      dispatch(voteAnecdote(anecdote.id,anecdote))
      dispatch(setNotification("Vote received! :)",5))
    }

    const anecdotes = unsortedAnecdotes.slice().sort(function(a, b) {
      if (a.votes > b.votes) return -1;
      if (a.votes < b.votes) return 1;
      return 0;})
    
    return(
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voter(anecdote)}>vote</button>
        </div>
      </div>
  ))};
  
  export {AnList}