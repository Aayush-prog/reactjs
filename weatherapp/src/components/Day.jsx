import React from 'react'

export default function Day({dayData}){
    //destructing an array
    const {dt, weather, name , main }=dayData
    const date= new Date(dt*1000);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const time = date.toLocaleDateString(undefined, options);
    return (
        <div
        className="w-3/4 shadow-2xl text-center mx-auto p-2 mb-10 bg-white bg-opacity-10 rounded-xl">
            <h1>{name}</h1>
            <h1>{time}</h1>
            <div className="flex justify-center">
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="icon.png"/>
            </div>
            <h1>{weather[0].main}</h1>
            <h1>{main.temp}</h1>
        </div>
    );
}