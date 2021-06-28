import { useState, useEffect } from "react";
import axios from "axios";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(urlName: string, pageNo: number, setDataCallback: (data: []) => void) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
        .get(`https://swapi.dev/api/${urlName}/?page=${pageNo}`)
        .then(response => {
          if (response.data) return response.data.results;
        })
        .then(data => {
          //call callback from the parent component
          setDataCallback(data)
        })
        .catch(err => {
          console.error(err);
          setError('An error occured. Please try again later.');
        })
        .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlName, pageNo]);

  return [ loading, error ];
}