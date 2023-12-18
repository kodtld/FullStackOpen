import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

const pushNew = async (content) => {
    const object = { content: content, votes:0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

const voteAnecdote = async (id, update) => {
    const response = await axios.put(`${baseUrl}/${id}`, update)
    return response.data
}
  
export default { getAll, pushNew, voteAnecdote }