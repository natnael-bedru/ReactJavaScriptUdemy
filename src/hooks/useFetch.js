import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      /*
      => When the try catch statement is covered by the setTimeout function it responds like the following
        *** Failed to execute 'fetch' on 'Window': The user aborted a request.
      => If it is commented out it responds different as follows
       *** The user aborted a request.
     */
      // Simulate a network delay of 3 seconds
      setTimeout(async () => {
        try {
          const response = await fetch(url, { signal: controller.signal });
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
    return () => controller.abort();
  }, [url]);
  return { data, loading, error };
};
