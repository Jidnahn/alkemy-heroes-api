import { useState, useEffect, useRef } from "react";
import * as axios from "axios";

const useFetch = (url, data = {}, method = "get") => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    axios({
      method,
      url,
      data,
    })
      .then(({ data }) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error: error,
        });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
};

export default useFetch;
