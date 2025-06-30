import { routes } from "@/utills/routes";
import Link from "next/link";
import { TbCalendarCheck, TbDeviceMobileCheck } from "react-icons/tb";

interface TeamMemberCardProps {
  img: string;
  name: string;
  department: string;
  speciality: string;
  telemedicine: boolean;
}

export default function DoctorCard(props: TeamMemberCardProps) {
  return (
    <div className="relative group  border rounded-2xl border-base-content/10 shadow-md hover:shadow-xl transition-[box-shadow]">
      <div className="relative overflow-hidden rounded-xl mb-2">
        <img
          src={props.img}
          alt="Team member"
          title="Team member photo"
          className="w-full aspect-[4/4] object-cover object-center transform group-hover:scale-105 transition duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6 ">
          <Link
            href={routes.doctorDetail("john")}
            className="btn btn-lg btn-primary btn-soft group-hover:-translate-y-16 transition-[translate] duration-500 "
          >
            View Detail
          </Link>
        </div>
      </div>
      <div className="p-2 md:p-4 pb-5 md:pb-10 space-y-2">
        <p className="text-secondary font-medium text-sm md:text-base">
          {props.department}
        </p>
        <h3 className="text-lg md:text-xl font-bold">{props.name}</h3>
        <p className="text-sm md:text-base mt-2 uppercase">
          {props.speciality}
        </p>
      </div>
      <div className="divider"></div>
      <div className="text-center p-2 md:p-4">
        <Link
          href={routes.bookAppontmentsDetail("john")}
          className="link link-secondary no-underline font-semibold text-sm md:text-lg flex items-center justify-center gap-2  w-full"
        >
          <TbCalendarCheck className="size-5 md:size-6 inline" />
          Book Appointment
        </Link>
        <Link
          href={routes.doctorDetail("john")}
          className="link no-underline font-semibold text-xs md:text-lg lg:hidden"
        >
          View Detail
        </Link>
      </div>
      {props.telemedicine && (
        <div className="absolute top-1 right-1">
          <div className="relative group/tooltip">
            <button
              className="tooltip-toggle btn btn-circle btn-soft bg-base-100 shadow-sm peer"
              aria-label="Tooltip"
            >
              <TbDeviceMobileCheck className="size-5" />
            </button>
            <span
              className="hidden absolute -top-8 right-1/2 translate-x-1/2 group-hover/tooltip:inline peer-focus:inline z-10"
              role="tooltip"
            >
              <span className="tooltip-body text-nowrap text-xs">
                Doctor Available for Telemedicine
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
