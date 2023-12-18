const TotalEx = (props) => {
    const parts = props.parts
    const array = parts.map(part => part.exercises)
    const initialValue = 0
    const total = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  
    return(
      <div>
        <h3>Total number of exercises: {total}</h3>
      </div>
    )
  }
  
  const SingleCourse = (props) =>{
    const name = props.course['name']
    const parts = props.course['parts']
    
    return(
    <div>
      <h1>{name}</h1>
          {parts.map(part =>
              <p>
                {part.name}: {part.exercises}
              </p>      
          )}
        <TotalEx parts = {parts}/>
    </div>
    )
  }
  
  const Course = (props) => {
    const courses = props.courses
    
    return(
      <div>
        {courses.map(single =>
            <SingleCourse key={single.name} course={single}/>
          )}   
      </div>
    )
  }
  export default Course