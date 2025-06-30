"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface DoctorFilters {
  department: string;
  speciality: string;
  language: string;
  gender: string;
}

// @ts-ignore
const DoctorFiltersContext = createContext<{
  filters: DoctorFilters;
  setFilters: Dispatch<SetStateAction<DoctorFilters>>;
}>();

export const DoctorFiltersContextProvider = (prop: PropsWithChildren) => {
  const [filters, setFilters] = useState<DoctorFilters>({
    department: "",
    gender: "",
    language: "",
    speciality: "",
  });

  return (
    <DoctorFiltersContext.Provider value={{ filters, setFilters }}>
      {prop.children}
    </DoctorFiltersContext.Provider>
  );
};

export const useDoctorFilters = () => useContext(DoctorFiltersContext);
