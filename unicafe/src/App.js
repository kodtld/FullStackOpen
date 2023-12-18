import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const headtext = 'Give Feedback'
  const stattext = 'Statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const full_count = bad + neutral + good
  const average_count = ((good*[1])+(neutral*[0])+(bad*[-1]))/(full_count)
  const positive_count = (100*good)/(full_count)

  return (
    <div>
      <Header headtext={headtext}/>
      <Button value={good} set={setGood} text={'Good'}/>
      <Button value={neutral} set={setNeutral} text={'Neutral'}/>
      <Button value={bad} set={setBad} text={'Bad'}/>
    
      <StatText stattext={stattext} />
      <Statistics g_count={good} n_count={neutral} b_count={bad} Statistics
       full_count={full_count} 
       average_count={average_count} 
       positive_count={positive_count}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.headtext}
      </h1>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={()=>{props.set(props.value + 1)}}> {props.text}</button>
    </div>
  )
}

const StatText = (props) => {
  return(
    <div>
      <h1>
        {props.stattext}
      </h1>
    </div>
  )
}

const Statistics = (props) => {
  if (props.full_count > 0) {
    return(
      <div>
        <table>
          <tr>
            <td><StatisticLine name={'Good:'} data={props.g_count}/></td>
          </tr>
          <tr>
            <td><StatisticLine name={'Neutral:'} data={props.n_count}/></td>
          </tr>
          <tr>
            <td><StatisticLine name={'Bad:'} data={props.b_count}/></td>
          </tr>
          <tr>
            <td><StatisticLine name={'All:'} data={props.full_count}/></td>
          </tr>
          <tr>
            <td><StatisticLine name={'Average:'} data={props.average_count}/></td>
          </tr>
          <tr>
            <td><StatisticLine name={'Positive:'} data={props.positive_count +' %'}/></td>
          </tr>
        </table>
      </div>
    )
  }
  if (props.full_count == 0) {
    return(
      <div>
        <h3>No feedbacks given</h3>
      </div>
    ) 
  }
}

const StatisticLine = (props) => {
  return(
    <div>
      {props.name} {props.data}
    </div>
  )
}

export default App