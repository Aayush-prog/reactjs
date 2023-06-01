import React from 'react'
import './App.css'
//importing the components
import Search from './components/Search'
import Hourly from './components/Hourly'
import Day from './components/Day'
function App() {
  //setting neccsarry state for the child components
  const apikey = "4c686e53a642140655d04f47fee6b7b8"
  const [cityName, setCityName]=React.useState("")
  const [cityData, setCityData]=React.useState([])
  const [dayData,setDayData]=React.useState([])
  //function to handle change on the input
  function handleChange(event){
    const {value}=event.target
    setCityName(value)//setting cityName on every change
  }
  //funtion to handle button click
  function handleClick() {
    //finding out the number of hours remaining to get to next day
    const now = new Date();
    const currentTimestamp = now.getTime();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const targetTimestamp = targetDate.getTime();
    const millisecondsInHour = 1000 * 60 * 60;
    const hoursUntilTarget = Math.floor((targetTimestamp - currentTimestamp) / millisecondsInHour);
    //fetching current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`)
    .then(res=>res.json())
    .then(data=>setDayData([data]))
    //fetching hourly weather data
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&units=metric&cnt=${hoursUntilTarget}&appid=${apikey}`)
      .then(res => res.json())
      .then(data => {
        setCityData(data.list)
      });
  }
  //mapping multiple eements of same component with diff value
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
