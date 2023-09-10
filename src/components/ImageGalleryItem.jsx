export const ImageGalleryItem = ({
  largePhotoFunction,
  largePhoto,
  id,
  smallImg,
}) => {
  return (
    <li
      key={id}
      className="ImageGalleryItem"
      onClick={() => largePhotoFunction(largePhoto)}
    >
      <img src={smallImg} alt="photo" className="ImageGalleryItem-image" />
    </li>
  );
};
