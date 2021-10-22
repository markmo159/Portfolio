import React from 'react';

const Card = ({
    imgSrc,
    title
}) => {
    <div className="card">
        <div className="circle pulsate-fwd"><img src={imgSrc} alt="" /></div>
        <p>{title}</p>
    </div>
}