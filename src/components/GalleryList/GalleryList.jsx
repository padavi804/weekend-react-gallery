import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

export default function GalleryList  ({id, pic}) {
    return (
        <div data-testid="galleryList" className='galleryList'>
            {pic.map (pic => (
            <GalleryItem key={id} pic={pic}/>
        ))}
        </div>
    );
};