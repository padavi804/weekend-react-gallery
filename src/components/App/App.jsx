import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
function App() {

  let [pic, setPic] = useState ([]);

  const fetchPics = () => {
    axios.get('/api/gallery')
      .then(response => {
        console.log(response.data);
        setPic(response.data);
      }).catch(error => {
        alert('Cannot fetch pics from database');
        console.log(error);
      })
  }
  useEffect(fetchPics, []);

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList gallerylist={pic} />
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;
