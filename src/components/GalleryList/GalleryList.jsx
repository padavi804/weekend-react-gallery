import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function GalleryList  ({id, pic, fetchPics}) {
    return (
        <div data-testid="galleryList" className='galleryList'>
            {pic.map (pic => (
            <GalleryItem key={id} pic={pic} fetchPics={fetchPics}/>
        ))}
        </div>
    );
};