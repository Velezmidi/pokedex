import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, data, isError };
};
