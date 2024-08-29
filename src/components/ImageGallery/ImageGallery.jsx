import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ data, onClick }) => {
  const handleClick = (src, alt, isOpen) => {
    onClick({ src, alt, isOpen });
  }

  return (
    <>
      {data &&
        <ul className={styles.gallery}>
          {data.map(image =>
            <li
              key={image.id}
              onClick={() => {
                handleClick(image.urls.regular, image.alt_description, true)
              }}
            >
              <ImageCard src={image.urls.small} alt={image.alt_description} />
            </li>
          )}
        </ul>
      }
    </>
  )
}

export default ImageGallery;