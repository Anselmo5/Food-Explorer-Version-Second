import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState(null)

    const httpConfig = (data, method) => {
      if (method === 'POST') {
        setConfig({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        setMethod('POST');
      } else if (method === 'DELETE') {
        setConfig({
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        setMethod(method);
        setDeleteId(data);
      }
    };
    

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError('Houve um erro no carregamento');
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch,deleteId]);

  useEffect(() => {
    const httpRequest = async () => {
      let json
      
      if (method === "POST"){

        let fectOptions  = [url,config]
        const res = await fetch(...fectOptions);
        json = await res.json();
      } else if (method === "DELETE") {

        const deleteUrl = `${url}/${deleteId}`
        const res = await fetch(deleteUrl,config)
        json = await res.json()
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};

export default useFetch;
