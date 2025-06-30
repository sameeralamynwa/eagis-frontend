"use client";

import { useEffect, useState } from "react";

export default function useFakeIndicator() {
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIndicator(true);
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return indicator;
}
