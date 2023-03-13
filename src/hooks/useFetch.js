import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            console.log(result);
        }
        fetchData();
    }, [url]);
  return { data };
}
