import './CatImage.css';
import React, { useState } from 'react';

export default function CatImage(props) {
  const [imgUrl, setUrl] = useState('');

  const imageFetcher = () => {
    if (imgUrl === '') {
        return "Loading Image..."
    } else {
        return <img src={imgUrl} alt={props.data.name}/>
    }
  }
  if (imgUrl === '') {
    fetch(`https://api.thecatapi.com/v1/images/${props.data.reference_image_id}`).then(response => response.json()).then(res => {
        setUrl(res.url);
    });
  }
  return (
    <div className="imageWrapper">
        { imageFetcher() }
    </div>
  );  
}