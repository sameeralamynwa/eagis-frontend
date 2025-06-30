"use client";

import useScroll from "@/hooks/useScroll";
import doctorImg from "@/public/img/doctors/d121.jpg";
import { routes } from "@/utills/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbArrowRight } from "react-icons/tb";

export default function DoctorDetailSection1() {
  const { position } = useScroll();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
      <div className="">
        <div className="flex flex-col justify-start items-center sticky top-5">
          <div className="w-auto max-h-max max-w-72 overflow-clip rounded-t-2xl shadow-xl">
            <Image src={doctorImg} alt="doctor" className="object-cover" />
          </div>
          <div
            className={`hidden md:block bg-base-100 w-full max-w-72 rounded-b-2xl overflow-clip  space-y-2 text-center transition-[height] duration-500 ${
              position.y > 100 ? "h-48 p-4" : "h-0"
            }`}
          >
            <h2 className="text-xl font-bold">Dr. Sara Sayed Talib Osman</h2>
            <p className="text-base text-base-content/70 ">
              Consultant , Infectious Diseases
            </p>
            <Link
              href={routes.bookAppontmentsDetail("john")}
              className="btn w-full mt-2"
            >
              Request Appontment
            </Link>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="text-center md:text-start">
            <h1 className="text-3xl font-bold mb-2">
              Dr. Sara Sayed Talib Osman
            </h1>
            <p className="text-base-content/70">
              Consultant , Infectious Diseases
            </p>
          </div>
          <div className="text-center">
            <Link
              href={routes.bookAppontmentsDetail("john")}
              className="btn btn-lg"
            >
              Request Appointment
            </Link>
          </div>
        </div>
        <div className="divider mb-8"></div>

        <div className="text-center md:text-start mb-8">
          <h2 className="text-base-content/70">Lanugages</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 p-3">
            <div className="badge badge-secondary bg-secondary/30  border-none badge-lg rounded-sm p-4">
              English
            </div>
            <div className="badge badge-secondary bg-secondary/30  border-none badge-lg rounded-sm p-4">
              Arabic
            </div>
          </div>
        </div>

        <div className="text-center md:text-start mb-8">
          <h2 className="text-base-content/70 mb-2">Practice At</h2>
          <a href="#" className="btn bg-base-100 text-base-content border-none">
            Mediclinic Hospital <TbArrowRight />
          </a>
        </div>
        <ExperienceAndEducation />
      </div>
      <div
        className={`fixed top-0 left-0 md:hidden  bg-base-100 w-full overflow-clip  space-y-1 text-center transition-[height] ${
          position.y > 200 ? "h-28 p-4" : "h-0"
        }`}
      >
        <h2 className="text-xl font-bold">Dr. Sara Sayed Talib Osman</h2>
        <p className="text-base text-base-content/70 ">
          Consultant , Infectious Diseases
        </p>
        <Link
          href={routes.bookAppontmentsDetail("john")}
          className="link link-secondary no-underline"
        >
          Request Appontment
        </Link>
      </div>
    </div>
  );
}

const ExperienceAndEducation = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );
  return (
    <div className="rounded-2xl bg-base-100 w-full overflow-clip">
      <div className="grid grid-cols-2 text-center">
        <div
          className={`p-4 transition-[background-color,color] duration-500 cursor-pointer ${
            activeTab === "experience" ? "bg-primary text-primary-content" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </div>
        <div
          className={`p-4 transition-[background-color,color] duration-500 cursor-pointer ${
            activeTab === "education" ? "bg-primary text-primary-content" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </div>
      </div>
      <div className="px-5 pb-5">
        {activeTab == "education" && <Educations />}
        {activeTab == "experience" && <Experiences />}
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <ul className="timeline timeline-vertical timeline-compact">
      <li>
        <div className="timeline-middle">
          <span className="border border-base-content/20 flex size-4.5 items-center justify-center rounded-full"></span>
        </div>
        <div className="timeline-end pl-6 pt-8">
          <h3 className="font-bold">Mediclinic Hospital</h3>
          <p className="text-sm text-base-content/50 font-semibold">
            California, USA
          </p>
          <p className="text-sm text-base-content/50 font-semibold">
            2021 - Present
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle text-base-content/50">2019</div>
        <div className="timeline-end pl-6">
          <h3 className="font-bold">Dr Sulaiman Al Habib Medical Center</h3>
          <p className="text-sm text-base-content/50 font-semibold">
            California, USA
          </p>
          <p className="text-sm text-base-content/50 font-semibold">
            2018 - 2021
          </p>
        </div>
      </li>
    </ul>
  );
};

const Educations = () => {
  return (
    <ul className="timeline timeline-vertical timeline-compact">
      <li>
        <div className="timeline-middle">2014</div>
        <div className="timeline-end pl-6 pt-4 pb-3">
          <h3 className="font-bold">
            Board - Diplomate American Board of Infectious Disease
          </h3>
          <p className="text-sm text-base-content/50 font-semibold">
            American Board of Medical Specialties, United States of America
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle text-base-content/50">2014</div>
        <div className="timeline-end pl-6 pb-3">
          <h3 className="font-bold">
            Fellowship - Clinical Fellowship in Infectious Disease
          </h3>
          <p className="text-sm text-base-content/50 font-semibold">
            Boston Medical Center, United States of America
          </p>
        </div>
      </li>
      <li>
        <hr />
        <div className="timeline-middle text-base-content/50">2011</div>
        <div className="timeline-end pl-6 pb-3">
          <h3 className="font-bold">
            Board - Diplomate American Board of Endocrinology, Diabetes and
            Metabolism
          </h3>
          <p className="text-sm text-base-content/50 font-semibold">
            American Board of Medical Specialties, United States of America
          </p>
        </div>
      </li>
      <li>
        <hr />
        <div className="timeline-middle text-base-content/50">2011</div>
        <div className="timeline-end pl-6 pb-3">
          <h3 className="font-bold">Residency - Internal Medicine</h3>
          <p className="text-sm text-base-content/50 font-semibold">
            Tufts University, United States of America
          </p>
        </div>
      </li>
      <li>
        <hr />
        <div className="timeline-middle text-base-content/50">200</div>
        <div className="timeline-end pl-6 pb-3">
          <h3 className="font-bold">
            Medical School - Bachelor of Medicine and Bachelor of Surgery (MBBS)
          </h3>
          <p className="text-sm text-base-content/50 font-semibold">
            University of Khartoum, Sudan
          </p>
        </div>
      </li>
    </ul>
  );
};
