import { useState, useEffect } from "react";
import axios from "axios";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(urlName, pageNo, prevData) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    return axios
      .get(`https://swapi.dev/api/${urlName}/?page=${pageNo}`)
      .then(response => {
        if (response) return response.data.results;
        setError(response);
      })
      .then(data => {
        const newData = [
            ...prevData,
            ...data
        ];
        setData(newData)
      })
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [urlName, pageNo, prevData]);

  return [ data, loading, error ];
}