import styles from "./ImageCard.module.css";

const ImageCard = ({ src, alt, contain }) => {
  return (
    <>
      <div
        className={
          contain ?
            styles.container + ' ' + styles.contain
            : styles.container}
      > 
        <img src={src} alt={alt} />
      </div>
    </>
  )
}

export default ImageCard;