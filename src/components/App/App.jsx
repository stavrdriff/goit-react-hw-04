import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from "axios";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState('');
    const [gallery, setGallery] = useState([]);
    const [error, setError] = useState(false);
   
    const onSubmit = (value) => {
        setRequest(value);
    }

    let page = 1;

    useEffect(() => {
        async function requestImages(page, request) {
            if (request && page !== page) {
                try {
                    setLoading(true);
                    const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=TU4ZBa3lH_jm6i-xK9KVAmtMVz4-w3j3F5e-qLhH3ho&per_page=16&page=${page}&query=${request}`);
                    console.log(typeof response.data.results)
                    setGallery(response.data.results);
                }
                catch {
                    setError(true);
                }
                finally {
                    setLoading(false);
                }
            }
        }

        requestImages(page, request);
    }, [page, request])

    return (
        <>
            <SearchBar onSubmit={onSubmit} />
            {loading && <Loader />}
            {error && <ErrorMessage text={'Ooooops... something wet wrong.'} /> }
            {gallery.length > 0 && <ImageGallery data={gallery} />}
            <LoadMoreBtn />
            
        </>
    )
}

export default App
