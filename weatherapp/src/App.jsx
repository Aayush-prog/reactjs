import React from 'react'
import './App.css'
//importing the components
import Search from './components/Search'
import Hourly from './components/Hourly'
import Day from './components/Day'
import Forecast from './components/Forecast'
function App() {
  //setting neccsarry state for the child components
  const apikey = "4c686e53a642140655d04f47fee6b7b8"
  const [cityName, setCityName]=React.useState()
  const [cityData, setCityData]=React.useState([])
  const [dayData,setDayData]=React.useState([])
  const [forecastData,setForecastData]=React.useState([])
  //get user location when loads
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://ipapi.co/json');
        const data = await response.json();
        setCityName(data.city);
        
        const now = new Date();
        const currentTimestamp = now.getTime();
        const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const targetTimestamp = targetDate.getTime();
        const millisecondsInHour = 1000 * 60 * 60;
        const hoursUntilTarget = Math.floor((targetTimestamp - currentTimestamp) / millisecondsInHour);
        
        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=${apikey}`);
        const dataWeather = await responseWeather.json();
        setDayData([dataWeather]);
        
        const responseHourly = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${data.city}&units=metric&cnt=${hoursUntilTarget}&appid=${apikey}`);
        const dataHourly = await responseHourly.json();
        setCityData(dataHourly.list);
        
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${data.city}&units=metric&cnt=15&appid=${apikey}`);
        const dataForecast = await responseForecast.json();
        setForecastData(dataForecast.list);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData()
  }, []);
  
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
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=metric&cnt=15&appid=${apikey}`)
      .then(res => res.json())
      .then(data => {
        setForecastData(data.list);
      });    
  }
  //mapping multiple eements of same component with diff value
  const hours= cityData.map((item,index)=>{
    return <Hourly key={index} cityData={item}/>
  })
  const forecast=forecastData.map((item,index)=>{
    return <Forecast key={index} forecastData={item}/>
  })
  //calling the components
return (
  <div>
    <Search
    handleChange={handleChange}
    handleClick={handleClick}/>
    {dayData.length > 0 && <Day dayData={dayData[0]} />}
    <div className="m-5 bg-white bg-opacity-10 rounded-xl">
      <h1 className="text-center pt-2 pb-0 mb-0">Hourly Forecast</h1>
      <div className="scrollbar-hide relative flex items items-center justify-start overflow-x-scroll scroll-smooth" style={{ marginTop: "-23px" }}>
        {hours}
      </div>
    </div>
    <div className="m-5 bg-white bg-opacity-10 rounded-xl">
    <h1 className='pt-2 pb-0 mb-0 text-center'>15 day forecast</h1>
    <div 
    className="  scrollbar-hide relative flex items items-center justify-start overflow-x-scroll scroll-smooth" style={{ marginTop: "-23px" }}>
      {forecast}
    </div>
    </div>
  </div>  
  );
}

export default App
