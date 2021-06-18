import { useState, useEffect } from "react";
import axios from "axios";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(urlName, pageNo, prevData) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    return axios
        .get(`https://swapi.dev/api/${urlName}/?page=${pageNo}`)
        .then(response => {
          if (response.data) return response.data.results;
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
          setError('An error occured. Please try again later.');
        })
        .finally(() => setLoading(false));
  }, [urlName, pageNo, prevData]);

  return [ data, loading, error ];
}