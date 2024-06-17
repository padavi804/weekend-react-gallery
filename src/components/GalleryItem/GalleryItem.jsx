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
        <p>Test</p>
        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {pic.map((item) => (
        <ImageListItem key={pic.url}>
          <img
            srcSet={`${pic.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${pic.url}?w=164&h=164&fit=crop&auto=format`}
            alt={pic.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> */}
        <img src={pic.url} alt="Gallery Image" />
    
    </div>
  );
};




