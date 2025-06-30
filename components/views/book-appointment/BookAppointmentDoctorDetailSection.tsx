import Image from "next/image";
import { TbArrowRight } from "react-icons/tb";
import doctorImg from "@/public/img/doctors/d121.jpg";
import Link from "next/link";
import { routes } from "@/utills/routes";

export default function BookAppointmentDoctorDetailSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
      <div className="">
        <div className="flex flex-col justify-start items-center sticky top-5">
          <div className="w-auto max-h-max max-w-72 overflow-clip rounded-2xl shadow-xl">
            <Image src={doctorImg} alt="doctor" className="object-cover" />
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
              href={routes.doctorDetail("john")}
              className="link text-lg font-semibold link-secondary no-underline"
            >
              View Profile <TbArrowRight className="inline" />
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
      </div>
    </div>
  );
}
