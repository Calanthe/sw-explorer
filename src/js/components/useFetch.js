import { useState, useEffect } from "react";
import axios from "axios";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(pageNo) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    return axios
      .get(`https://swapi.dev/api/people/?page=${pageNo}`)
      .then(response => {
        if (response) return response.data.results;
        setError(response);
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [pageNo]);

  return [ data, loading, error ];
}