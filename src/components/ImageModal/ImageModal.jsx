import ImageCard from '../ImageCard/ImageCard';
import Modal from 'react-modal';
import styles from './ImageModal.module.css'

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  Modal.setAppElement('#root');

  const handleClose = () => { 
    onClose({src:'', alt:'', isOpen: false})
  }

  return (
    <Modal
      bodyOpenClassName={styles.body}
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
      onRequestClose={() => {handleClose}}
      ariaHideApp={false}
      
    >
      <ImageCard src={src} alt={alt} contain={true}/>
    </Modal>
  )

}

export default ImageModal;