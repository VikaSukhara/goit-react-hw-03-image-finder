export const ImageGalleryItem = ({
  largePhotoFunction,
  largePhoto,
  id,
  smallImg,
  tags
}) => {
  return (
    <li
      key={id}
      className="ImageGalleryItem"
      onClick={() => largePhotoFunction(largePhoto)}
    >
      <img src={smallImg} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
