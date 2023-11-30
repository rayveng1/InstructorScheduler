import { useEffect, useState } from "react";

export default function useSchedData(): {
  isLoading: boolean;
  data: any;
} {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:8080/getSolution")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    isLoading: isLoading,
    data: data,
  };
}
