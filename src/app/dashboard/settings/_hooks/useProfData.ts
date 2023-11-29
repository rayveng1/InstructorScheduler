import { Professor } from "@/app/types/Professor";
import { useEffect, useState } from "react";

type Return = {
  data: Professor;
  isLoading: boolean;
};

export default function useProfData(id: string | null): Return {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`http://localhost:8080/Instructor/3`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  return {
    data: data,
    isLoading: isLoading,
  };
}
