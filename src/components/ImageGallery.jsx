import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ photos, largePhotoFunction }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            largePhotoFunction={largePhotoFunction}
            photo={photo}
            id={photo.id}
            smallImg={photo.webformatURL}
            largePhoto={photo.largeImageURL}
          />
        );
      })}
    </ul>

    //   //   ))}
    //   // </ul>
  );
};
