import * as React from 'react';
import {useState, useEffect} from 'react';



export default function GalleryItem ({pic}){
    
const [photoDescription, setDescription] = useState(false);
    // useState variable for toggle
const toggleDesc = () => {
    setDescription(!photoDescription);
};
//          event handler to toggle state


// like button axios.put

  return (
    <div data-testid="galleryList">       
        <img src={pic.url} alt="Gallery Image" />    
    </div>
  );
};




