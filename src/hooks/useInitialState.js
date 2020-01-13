import React, {useState, useEffect} from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(API);
            const data = await response.json();
            setVideos(data)

        }

        fetchData()
        
    }, []);

    return videos;
}

export default useInitialState;