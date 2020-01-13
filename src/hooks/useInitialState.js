import React, {useState, useEffect} from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);

    useEffect(async () => {
        const response = await fetch(API);
        const data = await response.json();
        setVideos(data)
        
    }, []);

    return videos;
}

export default useInitialState;