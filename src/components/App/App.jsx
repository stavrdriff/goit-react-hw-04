import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from "axios";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState('');
    const [gallery, setGallery] = useState(Array)
   
    const onSubmit = (value) => {
        setRequest(value);
    }

    useEffect(() => {
        async function requestImages() {
            try {
                setLoading(true);
                const response = await axios.get('https://api.unsplash.com/photos/?client_id=TU4ZBa3lH_jm6i-xK9KVAmtMVz4-w3j3F5e-qLhH3ho&query=' + request);
                setGallery(response.data);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        requestImages();
    }, [request])

    return (
        <>
            <SearchBar onSubmit={onSubmit} />
            <ImageGallery data={gallery} />
            
            {loading && <Loader />}
        </>
    )
}

export default App
