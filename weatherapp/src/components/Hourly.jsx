import React from 'react'

export default function Hourly({ cityData }) {
    //destructuring an array
    const { dt, weather, main } = cityData;
    //converting the utc into hours and minutes
    const date= new Date(dt*1000);
    const time= `${date.getHours()}:${date.getMinutes()}`

    return (
      <div className="mx-3 my-5 p-3 inline-block ">
        <h2>{time}</h2>
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="icon.png"/>
        <h2>{main.temp}</h2>
      </div>
    );
  }
  