import React from 'react';
import styled from 'styled-components';

const PhotoWrapperDiv = styled.div`
    border: solid black;
    background: black;
    color: white;
`;

const TitleH2 = styled.div`
`;


const DateSection = styled.div`
    color: grey;
`
const PhotoOTD = (props) => {
    return (
        <PhotoWrapperDiv>
            <TitleH2>{props.photo.title}</TitleH2>
            <DateSection>{props.photo.date}</DateSection>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </PhotoWrapperDiv>
    )
}
export default PhotoOTD;