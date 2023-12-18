import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("");
  const [specificCountry, setSpecificCountry] = useState("");
  const [howLen, setHowLen] = useState(0);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
      <div>
        <div>
          Find countries <input onChange={event => {setSearchCountry(event.target.value); setSpecificCountry(""); setHowLen(countries.length)}}/>
        </div>
        <div>
          <FormatAPI countries={countries} filter={searchCountry} specificCountry={[specificCountry,setSpecificCountry]} howLen={[howLen,setHowLen]}/>
        </div>
      </div>
  );
}

const FormatAPI = (props) =>{
  const howLen = props.howLen[0]
  const setHowLen = props.howLen[1]
  const specificCountry = props.specificCountry[0]
  const setSpecificCountry = props.specificCountry[1]
  var filter = props.filter
  var countries = props.countries.filter(country=>country.name.common.toUpperCase().includes(filter.toUpperCase())).map(nimi =>{
    return(
      {name:nimi.name.common}
    )
  });

  setHowLen(countries.length);


  if (howLen > 10){
    return('Please specify your search')
  }

  if (howLen ===0) {
    return('No matches were found')
  }

  if (howLen === 1){
    setSpecificCountry(countries[0].name);
  }

  if (specificCountry === ""){
    return(
    <div>
      <PrintResults countries={countries} setSpecificCountry={setSpecificCountry}/>
    </div>
    )}

  if (setSpecificCountry != "") {
    const showCountry = props.countries.filter(country=>country.name.common.toUpperCase().includes(specificCountry.toUpperCase())).map(nimi =>{
      return(
        {name:nimi.name.common,capital:nimi.capital,area:nimi.area,lang:nimi.languages,flag:nimi.flags.png}
      )
    });

    const showLanguages = Object.values(showCountry[0].lang);
    
    return(
      <div>
        <h2>{showCountry[0].name}</h2>
        <p>Capital city: {showCountry[0].capital}</p>
        <p>Area: {showCountry[0].area}</p>
        <h3>Languages:</h3>
        <ul>
          {showLanguages.map(language =><li key={language}>{language}</li>)}
        </ul>
        <img src={showCountry[0].flag} alt="flag"/>
      </div>
    )
  }
}

const PrintResults = (props) =>{
  var setSpecificCountry = props.setSpecificCountry
  var countries = props.countries
  return(
    <ul>
    {countries.map(country=>(
      <li key={country.name}>{country.name}<button onClick={() => {setSpecificCountry(country.name);}}>Show</button></li>
      ))}
    </ul>)

}

export default App;
