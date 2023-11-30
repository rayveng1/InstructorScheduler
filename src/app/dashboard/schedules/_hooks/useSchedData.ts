import { useEffect, useState } from "react";
import {
  Schedule,
  dummy_schedule_data,
  dummy_schedule_data_2,
} from "../_static/dummy_data";

export default function useSchedData(selectedPage: number): {
  isLoading: boolean;
  data: Array<Schedule> | undefined;
} {
  const [data, setData] = useState<Array<Schedule>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setData(dummy_schedule_data_2);
    } else {
      fetch("http://localhost:8080/getSolution")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [selectedPage]);

  return {
    isLoading: isLoading,
    data: data,
  };
}
