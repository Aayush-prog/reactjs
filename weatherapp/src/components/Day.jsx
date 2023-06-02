import React from 'react'

export default function Day({dayData}){
    //destructing an array
    const {dt, weather, name , main }=dayData
    const date= new Date(dt*1000);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const time = date.toLocaleDateString(undefined, options);
    return (
        <div
        className="w-3/4 shadow-2xl text-center mx-auto p-2 mb-10 border border-solid border-black rounded-xl">
            <h1>{name}</h1>
            <h1>{time}</h1>
            <h1>{weather[0].main}</h1>
            <h1>{main.temp}</h1>
        </div>
    );
}