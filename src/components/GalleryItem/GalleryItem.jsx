import * as React from 'react';
import {useState, useEffect} from 'react';

export default function GalleryItem ({pic, fetchPics}){
const [description, setDescription] = useState(false);
    // useState variable for toggle
const toggleDesc = () => {
    setDescription(!description);
};
//          event handler to toggle state


// like button axios.put

  return (
    <div data-testid="galleryList">
        <p>Test</p>
        <img 
        ></img>
    
    </div>
  );
};




