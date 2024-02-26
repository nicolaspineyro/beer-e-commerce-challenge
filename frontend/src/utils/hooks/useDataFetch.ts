import { useEffect, useState } from "react";

const useDataFetch = <T>(
  url: string,
  { enabled }: { enabled: boolean }
): {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  refetch: () => void;
} => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [url, enabled]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, isLoading, refetch };
};

export default useDataFetch;
