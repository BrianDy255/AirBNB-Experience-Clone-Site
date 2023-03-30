import React from "react";

function Card(props) {
    // Can also utilize a variable to create the various badges depending on conditions
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "Sold Out"
    } else if (props.item.location == "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
            
            {/* Another conditional rendering. If the badgeText is "true" then run that if/else statement above */}
            {badgeText && <div className="card--badge">{badgeText}</div>}

            {/* // An example of conditional rendering for if openspots is 0, THEN run the soldout div badge */}
            {/* {props.openSpots === 0 && <div className="card--badge">SOLDOUT</div>} */}
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
            <p><span className="bold">Available: {props.item.openSpots}</span> </p>
        </div>
    )
}

export default Card;
