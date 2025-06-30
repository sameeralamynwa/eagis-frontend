"use client";

import { useCallback, useEffect, useState } from "react";

export default function useScroll() {
  const [position, setPossition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleScroll = useCallback(() => {
    setPossition({ x: window.scrollX, y: window.scrollY });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { position };
}
