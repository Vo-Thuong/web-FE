import { useState, useCallback } from "react";

export const useCounter = (
  initialValue: number = 0,
  min: number = -10,
  max: number = 10
) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const nextCount = prevCount + 1;
      return nextCount > max ? max : nextCount;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const nextCount = prevCount - 1;
      return nextCount < min ? min : nextCount;
    });
  }, [min]);

  const reset = useCallback(() => {
    const resetValue =
      initialValue < min ? min : initialValue > max ? max : initialValue;
    setCount(resetValue);
  }, [initialValue, min, max]);

  return {
    count,
    increment,
    decrement,
    reset,
    min,
    max,
  };
};

export type UseCounterResult = ReturnType<typeof useCounter>;
