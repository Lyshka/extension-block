import { useState, useEffect } from "react";
export const useDebouncedValue = <T>(value: T, timeout: number = 0) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debouncedValue;
};
