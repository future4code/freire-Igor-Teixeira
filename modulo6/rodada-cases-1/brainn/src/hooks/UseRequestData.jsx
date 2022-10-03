import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  const getData = () => {
   axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};

