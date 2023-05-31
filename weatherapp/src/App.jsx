import React from 'react'
import './App.css'
import Search from './components/Search'
import Hourly from './components/Hourly'
function App() {
  const apikey = "4c686e53a642140655d04f47fee6b7b8"
  const [cityName, setCityName]=React.useState("")
  const [cityData, setCityData]=React.useState([])
  function handleChange(event){
    const {value}=event.target
    setCityName(value)
  }
  function handleClick() {
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${apikey}`)
      .then(res => res.json())
      .then(data => {
        setCityData(data.list)
      });
  }
  const cards= cityData.map((item,index)=>{
    return <Hourly className="bg-gray-300 p-4" key={index} cityData={item}/>
  })
return (
  <div>
    <Search
    handleChange={handleChange}
    handleClick={handleClick}/>
    <div className="grid grid-cols-8 gap-4">{cards}</div>
  </div>
    
  );
}

export default App
