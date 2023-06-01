import React from 'react'
import './App.css'
import Search from './components/Search'
import Hourly from './components/Hourly'
import Day from './components/Day'
function App() {
  const apikey = "4c686e53a642140655d04f47fee6b7b8"
  const [cityName, setCityName]=React.useState("")
  const [cityData, setCityData]=React.useState([])
  const [dayData,setDayData]=React.useState([])
  function handleChange(event){
    const {value}=event.target
    setCityName(value)
  }
  function handleClick() {
    
    const now = new Date();
    const currentTimestamp = now.getTime();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const targetTimestamp = targetDate.getTime();
    const millisecondsInHour = 1000 * 60 * 60;
    const hoursUntilTarget = Math.floor((targetTimestamp - currentTimestamp) / millisecondsInHour);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`)
    .then(res=>res.json())
    .then(data=>setDayData([data]))
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&units=metric&cnt=${hoursUntilTarget}&appid=${apikey}`)
      .then(res => res.json())
      .then(data => {
        setCityData(data.list)
      });
  }
  console.log(dayData)
  const cards= cityData.map((item,index)=>{
    return <Hourly className="bg-gray-300 p-4" key={index} cityData={item}/>
  })
return (
  <div>
    <Search
    handleChange={handleChange}
    handleClick={handleClick}/>
    <Day
    dayData={dayData[0]}/>
    <div 
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {cards}
    </div>
    

  
  </div>  
  );
}

export default App
