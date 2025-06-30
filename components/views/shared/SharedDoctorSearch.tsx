"use client";

import { useDoctorFilters } from "@/components/context/DoctorFiltersContext";
import DoctorCard from "@/components/DoctorCard";
import Pagination from "@/components/Pagination";
import { doctorsData } from "@/data/doctorsData";
import { useModal } from "@/hooks/useModal";
import { fakeApiCall } from "@/utills/fakeApiCall";
import { useEffect, useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

interface SharedDoctorSearchProps {
  title: string;
}

export default function SharedDoctorSearch(props: SharedDoctorSearchProps) {
  const [filterOpen, setFilterOpen] = useState(true);
  const { open, close } = useModal("filter-modal", {
    onOpen: () => {
      setFilterOpen(true);
    },
    onclose() {
      setFilterOpen(false);
    },
  });

  const openFilterHanlder = () => {
    if (window.innerWidth < 768) {
      if (filterOpen) {
        setFilterOpen(false);
        open();
      } else {
        open();
      }
    } else {
      setFilterOpen((state) => !state);
    }
  };
  return (
    <>
      <div>
        <div className="flex justify-between gap-4">
          <h1 className="mb-4 text-lg sm:text-2xl font-bold">{props.title}</h1>
          <button
            className="btn btn-text btn-secondary font-semibold"
            onClick={openFilterHanlder}
          >
            Filters
            {filterOpen && <TbChevronDown className="size-5 stroke-3" />}
            {!filterOpen && <TbChevronUp className="size-5 stroke-3" />}
          </button>
        </div>

        <div
          className={`h-0 ${
            filterOpen ? "md:h-20" : ""
          }  overflow-clip transition-[height] duration-500`}
        >
          <Filters />
        </div>
        <br />
        <div>
          <DoctorList />
        </div>
      </div>
      <div
        id="filter-modal"
        className={`overlay modal overlay-open:opacity-100 hidden`}
        onClick={close}
        role="dialog"
        tabIndex={-1}
      >
        <div
          className={`modal-dialog overlay-open:opacity-100 min-w-0`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`modal-content justify-between`}>
            <div className="modal-header">
              <h3 className="modal-title text-lg">Filters</h3>
              <button
                type="button"
                className="btn btn-text btn-circle"
                aria-label="Close"
                onClick={close}
              >
                <span className="icon-[tabler--x] size-6"></span>
              </button>
            </div>
            <div className="modal-body grow">
              <Filters />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary btn-soft">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Filters = () => {
  const { filters, setFilters } = useDoctorFilters();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4">
      <div>
        <label htmlFor="sepciality" className="label-text">
          Sepciality
        </label>
        <select
          id="sepciality"
          name="sepciality"
          className={`select select-lg`}
          value={filters.speciality}
          onChange={(e) =>
            setFilters({ ...filters, speciality: e.target.value })
          }
        >
          <option value="All">All</option>
          <option value="Adiction Psychiatry">Adiction Psychiatry</option>
          <option value="Allergy Immunology">Allergy Immunology</option>
          <option value="Anotomy Pathology">Anotomy Pathology</option>
          <option value="Blood Services">Blood Services</option>
          <option value="Cardiac Sergery">Cardiac Sergery</option>
          <option value="Dentistry">Dentistry</option>
          <option value="Endocrynology">Endocrynology</option>
          <option value="Oncology">Oncology</option>
          <option value="Gynocology">Gynocology</option>
        </select>
      </div>
      <div>
        <label htmlFor="department" className="label-text">
          Department
        </label>
        <select
          id="department"
          name="department"
          className={`select select-lg`}
          value={filters.department}
          onChange={(e) =>
            setFilters({ ...filters, department: e.target.value })
          }
        >
          <option value="All">All</option>
          <option value="Anesthia">Anesthia</option>
          <option value="Cancer Care">Cancer Care</option>
          <option value="Cardiac Care">Cardiac Care</option>
          <option value="Critical Care">Critical Care</option>
          <option value="Family Medicines">Family Medicines</option>
          <option value="Kidney Care">Kidney Care</option>
          <option value="Neurosciences">Neurosciences</option>
          <option value="Oral Health">Oral Health</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </div>
      <div>
        <label htmlFor="gender" className="label-text">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          className={`select select-lg`}
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="language" className="label-text">
          Language
        </label>
        <select
          id="language"
          name="language"
          className={`select select-lg`}
          value={filters.language}
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
        >
          <option value="All">All</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
};

const DoctorList = () => {
  const { filters } = useDoctorFilters();
  const [loading, setLoading] = useState(false);
  const { close } = useModal("filter-modal");

  const fetchData = async () => {
    setLoading(true);
    await fakeApiCall();
    setLoading(false);
    close();
  };

  useEffect(() => {
    fetchData();
  }, [filters]);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {!loading &&
          doctorsData.map((d, i) => (
            <DoctorCard
              key={i}
              name={d.name}
              img={d.img}
              department={d.department}
              speciality={d.specialiy}
              telemedicine={d.telemedicine}
            />
          ))}
        {loading && [1, 2, 3, 4, 5, 6, 7, 8].map((s) => <Skeleton key={s} />)}
      </div>
      <br />
      <div className="flex justify-end mb-16">
        <Pagination
          nextPageUrl={"?page=2"}
          prevPageUrl={"?page=1"}
          links={[1, 2, 3, 4, 5].map((page) => ({
            url: "?page=" + page,
            active: false,
            label: page.toString(),
          }))}
        />
      </div>
    </>
  );
};

const Skeleton = () => (
  <div className="flex w-full flex-col gap-4">
    <div className="flex items-center gap-4">
      <div className="skeleton skeleton-animated h-12 w-12 shrink-0 rounded-full"></div>
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton skeleton-animated h-4 w-1/2"></div>
        <div className="skeleton skeleton-animated h-4 w-full"></div>
      </div>
    </div>
    <div className="skeleton skeleton-animated h-56 w-full"></div>
  </div>
);
