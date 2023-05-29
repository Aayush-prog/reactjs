import React from "react"

export default function Card(prop) {
    let props=prop.item
    return (
        <div className="card">
            {props.openSpots===0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`${props.coverImg}`} className="card--image" />
            <p className="card--title">{props.title}</p>
        </div>
    )
}
