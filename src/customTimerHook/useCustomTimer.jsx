import { useEffect, useState, useRef } from "react";

function useCustomTimer(duration) {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(Number(duration));
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function start() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return Number(duration);
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
  }

  function stop() {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSeconds(Number(duration));
  }

  return { isRunning, start, stop, seconds };
}

export default useCustomTimer;
