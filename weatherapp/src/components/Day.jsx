import React from 'react'

export default function Day({dayData}){
    //destructing an array
    const {dt, weather, name , main }=dayData
    return (
        <div
        className="w-1/2 mx-auto p-2 m-5 border border-solid border-black rounded-xl">
            <h1>{name}</h1>
            <h1>{dt}</h1>
            <h1>{weather[0].main}</h1>
            <h1>{main.temp}</h1>
        </div>
    );
}