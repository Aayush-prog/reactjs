import React from 'react'

export default function Hourly({ cityData }) {
    const { dt, weather, main } = cityData;
    const date= new Date(dt*1000);
    const time= `${date.getHours()}:${date.getMinutes()}`

    return (
      <div className="mx-auto w-[175px] h-[300px] p-3 shadow-2xl rounded-xl border border-solid border-black">
        <h2>{time}</h2>
        <p>{weather[0].icon}</p>
        <h2>{main.temp}</h2>
      </div>
    );
  }
  