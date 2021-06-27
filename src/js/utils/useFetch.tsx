import { useState, useEffect } from "react";
import axios from "axios";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(urlName: string, pageNo: number, setData) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('inside useFetch', urlName, pageNo)

  //@ts-ignore
  useEffect(() => {
    console.log("useEffect called", urlName, pageNo)
    setLoading(true);
    axios
        .get(`https://swapi.dev/api/${urlName}/?page=${pageNo}`)
        .then(response => {
          if (response.data) return response.data.results;
        })
        .then(data => {
          // TODO: call callback from parent component
          setData(data)
        })
        .catch(err => {
          console.error(err);
          setError('An error occured. Please try again later.');
        })
        .finally(() => setLoading(false));
  }, [urlName, pageNo]);

  let data = [];
  // TODO: remove first returned value
  return [ data, loading, error ];
}