import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'


export default function GalleryItem({ pic, fetchPics }) {

    const [photoDescription, setDescription] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    // useState variable for toggle
    const toggleDesc = () => {
        setDescription(!photoDescription);
    };
    //          event handler to toggle state


    // like button axios.put
    const likePhoto = (id) => {
        console.log(id)
        axios.put(`/api/gallery/likes/${id}`)
            .then(response => {
                console.log('liked photo:', response)
                setLikeCount(likeCount + 1);
                // fetchPics();
            })
            .catch(error => {
                console.log('cannot like photo error', error);
            });
    };

    return (
        <div data-testid="galleryItem">
            <h4>{pic.title}</h4>
            <div data-testid="toggle" onClick={() => toggleDesc(pic.id)}>
                {photoDescription ? (
                    <div className="description">
                        <br /> {pic.description} </div>)
                    : <img src={pic.url} alt={pic.title} />}
            </div>
            <div data-testid="like" >
                <button onClick={() => likePhoto(pic.id)}>Like</button><p>Likes: {likeCount}</p>
            </div>
        </div>
    );
};




