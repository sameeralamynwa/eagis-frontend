"use client";

import { useState } from "react";

export default function useCustomFetchClient<T>() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const exec = async (url: string) => {
    setLoading(true);
    setData(null);
    const res = await fetch(url);
    if (res.ok) {
      const fetchedData = await res.json();
      setData(fetchedData);
      setLoading(false);
    } else {
      const errorRes = await res.json();
      setErrorMessage(errorRes?.message || "Failed to fetch data");
      setLoading(false);
    }
    setLoading(false);
  };

  return { exec, loading, errorMessage, data };
}
