import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate a network delay of 3 seconds
      setTimeout(async () => {
        const response = await fetch(url);
        const result = await response.json();
        setLoading(false);
        setData(result);
      }, 3000);
    };

    fetchData();
  }, [url]);
  return { data, loading };
};
