import { useEffect, useState } from "react";

export function useDateTime() {
  let [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDateTime(new Date()), 1000);

    return function cleanUp() {
      clearInterval(timer);
    };
  }, []);

  return {
    time: dateTime.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    amp: dateTime.getHours() < 12 ? "AM" : "PM",
  };
}
