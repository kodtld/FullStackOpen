import { useState } from 'react'

const App = () => {
  const r_num = Math.floor(Math.random() * 7);
  const r_num_copy = [r_num]
  
  const [f0, setF0] = useState(0)
  const [f1, setF1] = useState(0)
  const [f2, setF2] = useState(0)
  const [f3, setF3] = useState(0)
  const [f4, setF4] = useState(0)
  const [f5, setF5] = useState(0)
  const [f6, setF6] = useState(0)
  
  const anecdotes = Array(
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  )
  
  const getNew = () => {
    setSelected(r_num_copy)
  }

  const vote = () => {

    if (r_num_copy == 0) {
      setF0(f0 + 1)
      console.log("0")
   
    }

    if (r_num_copy == 1) {
      setF1(f1 + 1)
      console.log("1")
  
    }

    if (r_num_copy == 2) {
      setF2(f2 + 1)
      console.log("2")
  
    }

    if (r_num_copy == 3) {
      setF3(f3 + 1)
      console.log("3")
    }

    if (r_num_copy == 4) {
      setF4(f4 + 1)
      console.log("4")

    }

    if (r_num_copy == 5) {
      setF5(f5 + 1)
      console.log("5")
    
    }
    
    if (r_num_copy == 6) {
      setF6(f6 + 1)
      console.log("6")
      
    }
    
    console.log([f0,f1,f2,f3,f4,f5,f6])
    return false
  }


  const [selected, setSelected] = useState(0)
  
  return (
    <div>
      <AnLine anecdotes={anecdotes} r_num={r_num_copy}/>
      <button type='button' onClick={vote}>Vote</button>
      <button onClick={getNew}>Next anecdote</button>
      
    </div>
  )
}
// <Buttons set={setSelected} selected={selected} points={point_copy} r_num={r_num_copy}>Next anecdote</Buttons>

//       <VoteMode r_num_copy={r_num_copy} 
//setF0={setF0} setF1={setF1} setF2={setF2} setF3={setF3} setF4={setF4} setF5={setF5} setF6={setF6}
//f0={f0} f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} f6={f6} />


const AnLine = (props) =>{
  return(
    <div>
      {props.anecdotes[props.r_num]}
    </div>
  )
}

export default App