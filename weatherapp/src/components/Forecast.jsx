import React from 'react'

export default function Forecast({ forecastData }) {
    //destructuring an array
    const { dt, weather, temp } = forecastData;
    //converting the utc into hours and minutes
    const date= new Date(dt*1000);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const time = date.toLocaleDateString(undefined, options);

    return (
      <div className="mx-3 my-7 p-3 shadow-2xl rounded-xl border border-solid border-black inline-block ">
        <h2>{time}</h2>
        <p>{weather[0].icon}</p>
        <h2>{temp.day}</h2>
      </div>
    );
  }