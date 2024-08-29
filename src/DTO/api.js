import axios from "axios";    

export const fetchData = async (page, request) => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=TU4ZBa3lH_jm6i-xK9KVAmtMVz4-w3j3F5e-qLhH3ho`, {
            params: {
                query: request,
                page: page,
                per_page: 12.
            }
        }
    );

    return response.data
}