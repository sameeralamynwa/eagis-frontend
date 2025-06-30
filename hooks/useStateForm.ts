"use client";

// <<< FIX: Import useCallback
import { useState, useCallback } from "react";

export default function useStateForm<T extends Record<string, any>>(
  initialForm: T
) {
  const [form, setForm] = useState(initialForm);

  const set = useCallback((key: keyof T, value: any) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  }, []); 

  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);
  
  return {
    form,
    set,
    reset,
  };
}