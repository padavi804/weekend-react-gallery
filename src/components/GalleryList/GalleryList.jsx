import GalleryItem from '../GalleryItem/GalleryItem';


export default function GalleryList  ({id, pic}) {
    return (
        <div data-testid="galleryList">
            {pic.map (pic => (
            <GalleryItem key={id} pic={pic}/>
        ))}
        </div>
    );
};