import React from 'react'

export default function Hourly({ cityData }) {
    //destructuring an array
    const { dt, weather, main } = cityData;
    //converting the utc into hours and minutes
    const date= new Date(dt*1000);
    const time= `${date.getHours()}:${date.getMinutes()}`

    return (
      <div className="mx-3 my-10 p-3 shadow-2xl rounded-xl border border-solid border-black inline-block ">
        <h2>{time}</h2>
        <p>{weather[0].icon}</p>
        <h2>{main.temp}</h2>
      </div>
    );
  }
  