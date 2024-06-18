import * as React from 'react';
import {useState} from 'react';
import axios from 'axios';


export default function GalleryItem ({pic}){
    
const [photoDescription, setDescription] = useState(false);
const [likeCount, setLikeCount] = useState(0);
    // useState variable for toggle
const toggleDesc = () => {
    setDescription(!photoDescription);
};
//          event handler to toggle state


// like button axios.put
const likePhoto = (id) => {
    axios.put(`/api/gallery/likes/${id}`)
    .then(response =>{
        setLikeCount( + 1);
    })
    .catch(error => {
        console.log('cannot like photo error', error);
    });
};
   
  return (
    <div data-testid="galleryItem"> 
        <div onClick={() => toggleDesc(pic.id)}>
            {photoDescription ? pic.description  : <img src={pic.url} alt={pic.title} /> }         
        </div> 
        <button onClick={() => likePhoto(pic.id)}>Like</button><p>Likes: {likeCount}</p>

    </div>
  );
};




