import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'


export default function GalleryList  ({id, pic, fetchPics}) {
    return (
        <div data-testid="galleryList" className='galleryList'>
            {pic.map (pic => (
            <GalleryItem key={pic.id} pic={pic} fetchPics={fetchPics}/>
        ))}
        </div>
    );
};