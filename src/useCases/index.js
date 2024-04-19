import axios from "axios";
import { useCallback, useState } from "react";

export const useFetch = (params) => {
  const method = params?.method;
  const endpoint = params?.endpoint;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async (body = null) => {
    try {
      setIsLoading(true);

      if (body !== null) {
        params.data = body;
      }

      const res = await axios({
        method,
        url: `http://localhost:4000/${endpoint}`,
        ...params,
      });

      if(res?.data?.length > 0) {
        setData(res?.data);
        setIsLoading(false);
      }

    } catch (error) {
      setIsLoading(false);
    }
  });

  return {
    fetch,
    data,
    isLoading,
  };
};
