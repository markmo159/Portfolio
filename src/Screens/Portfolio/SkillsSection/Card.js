import React from 'react';

const Card = ({imgSrc, title}) => {
    return(
    <div className="card d-f jc-c ai-c fd-c">
        <div className="circle pulsate-fwd"><img className="pos-abs" src={imgSrc} alt=""/></div>
        <p>{title}</p>
    </div>);
} 

export default Card