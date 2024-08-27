import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ data }) => {

  console.log(data)
  return (
    <>
      {data &&
        <ul>
          {data.map((image) =>
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