import React from 'react'

export default function Day(props){
    return (
        <div
        className="w-1/2 mx-auto p-2 m-5 border border-solid border-black rounded-xl">
            <h1>{props.dayData.dt}</h1>
            <h1>{props.dayData.weather.icon}</h1>
        </div>
    );
}