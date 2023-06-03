import React from 'react'

export default function Forecast({ forecastData }) {
    //destructuring an array
    const { dt, weather, temp } = forecastData;
    //converting the utc into hours and minutes
    const date= new Date(dt*1000);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const time = date.toLocaleDateString(undefined, options);

    return (
      <div className="mx-3 my-5 p-3 inline-block ">
        <h2>{time}</h2>
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="icon.png"/>
        <h2>{temp.day}</h2>
      </div>
    );
  }