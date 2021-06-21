import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const fetchedData = await response.json();
    setData(fetchedData);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, data };
};
