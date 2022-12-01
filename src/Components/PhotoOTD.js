import React from 'react';

const PhotoOTD = (props) => {
    return (
        <div className = 'photoWrapper'>
            <h2>{props.photo.title}</h2>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}
export default PhotoOTD;