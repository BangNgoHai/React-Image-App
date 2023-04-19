import React from 'react';
import "./card.css";

const Cards = (props) => {
    const {imageSrc,imageAlt,imageHref,imageTarget,imageContent} = props;
    return (
        <>
            <div className="cards-container">
                <div className="card">
                    <img src={imageSrc} alt={imageAlt} />
                    <a href={imageHref} target={imageTarget}>{imageContent}</a>
                </div>
            </div>
        </>
    )
}

export default Cards
