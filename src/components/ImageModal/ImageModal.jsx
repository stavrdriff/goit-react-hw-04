import ImageCard from '../ImageCard/ImageCard';
import Modal from 'react-modal';

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  const handleClose = () => { 
    onClose({src:'', alt:'', isOpen: false})
  }

  return (
    <Modal
      aria={{ labelledby: 'photo', describedby: alt }}
      style={
        {
          overlay: {
            background: 'rgba(0, 0, 0, 0.7)'
          }
        }}
      contentLabel={alt}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={handleClose}
      ariaHideApp={false}
      
    >
      <ImageCard src={src} alt={alt} contain={true}/>
    </Modal>
  )

}

export default ImageModal;