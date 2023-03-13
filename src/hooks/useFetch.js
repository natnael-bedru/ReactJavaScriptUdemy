import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate a network delay of 3 seconds
      setTimeout(async () => {
        try {
          const response = await fetch(url);
          if(!response.ok) {
            throw new Error (response.statusText);
          }
          const result = await response.json();
          setLoading(false);
          setData(result);
          setError("");
        } catch (error) {
          setLoading(false);
          setError(error.message);
        }
      }, 3000);
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};
