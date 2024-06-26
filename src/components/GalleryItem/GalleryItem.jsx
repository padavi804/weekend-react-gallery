import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './GalleryItem.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function GalleryItem({ pic, fetchPics }) {

    const [photoDescription, setDescription] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const toggleDesc = () => {
        setDescription(!photoDescription);
    };

    const likePhoto = (id) => {
        console.log(id)
        axios.put(`/api/gallery/likes/${id}`)
            .then(response => {
                console.log('liked photo:', response)
                // setLikeCount(likeCount + 1);
                fetchPics();
            })
            .catch((error) => {
                console.log('cannot like photo error', error);
            });
    };



    return (
        <div data-testid="galleryItem">
            <h4>{pic.title}</h4>
            <div data-testid="toggle" onClick={() => toggleDesc(pic.id)}>
                {photoDescription ? (
                    <div className="description"> {pic.description} </div>)
                    : <img src={pic.url} alt={pic.title} />}
            </div>
            <div  >
                <Stack spacing={2} direction="row">
                    <Badge data-testid="like" badgeContent={pic.likes} color="primary" onClick={() => likePhoto(pic.id)}>
                        <ThumbUpIcon color='action' />
                    </Badge>
                </Stack>

            </div>
        </div>
    );
};




