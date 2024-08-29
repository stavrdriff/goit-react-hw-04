import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchData } from '../../DTO/api';
import ImageModal from '../ImageModal/ImageModal';


const App = () => {
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState('');
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [countPages, setCountPages] = useState(0);
    const [gallery, setGallery] = useState([]);
    const [modal, setModal] = useState({src:'', alt:'', isOpen: false})
   
    const onSubmit = (request) => {
        setRequest(request);
        setPage(1);
        setGallery([]);
    }


    const handleModal = ({ src, alt, isOpen }) => {
        setModal({ src: src, alt: alt, isOpen: isOpen })       
    }

    useEffect(() => {
        if (request === '') {
            return;
        }

        async function requestImages(page, request) {
            try {
                setLoading(true);
                const newGallery = await fetchData(page, request);
                setCountPages(newGallery.total_pages);
                setGallery(prevGallery => [...prevGallery, ...newGallery.results])
            }
            catch {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }

        requestImages(page, request);
    }, [page, request])

    return (
        <>
            <SearchBar onSubmit={onSubmit} />
            {loading &&
                <Loader />
            }
            {error &&
                <ErrorMessage text={'Ooooops... something wet wrong.'} />
            }
            {gallery &&
                <ImageGallery data={gallery} onClick={handleModal} />
            }
            {countPages > page && !error &&
                <LoadMoreBtn
                    onClick={() => {
                        setPage(page + 1);
                    }}
                />
            }
            {modal.isOpen &&
                <ImageModal
                    src={modal.src}
                    alt={modal.alt}
                    isOpen={modal.isOpen}
                    onClose={handleModal}
                />
            }

            
        </>
    )
}

export default App
