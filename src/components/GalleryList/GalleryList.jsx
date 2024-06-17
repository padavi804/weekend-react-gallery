import GalleryItem from '../GalleryItem/GalleryItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function GalleryList  ({pic}) {
    return (
        <div data-testid="galleryList">
            <ImageList sx={{ width: 1200, height: 1200 }} cols={3} rowHeight={400}>
      {pic.map((pic, id) => (
        <ImageListItem key={pic.id}>
          <img
            srcSet={`${pic.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${pic.url}?w=164&h=164&fit=crop&auto=format`}
            alt={pic.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>           
        </div>
    );
};