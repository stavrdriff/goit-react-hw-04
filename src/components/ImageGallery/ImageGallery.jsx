import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ data }) => {
  return (
    <>
      {data &&
        <ul className={styles.gallery}>
          {data.map(image =>
            <li key={image.id}>
              <ImageCard src={image.urls.small} alt={image.alt_description} />
            </li>
          )}
        </ul>
      }
    </>
  )
}

export default ImageGallery;