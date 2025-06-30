import { routes } from "@/utills/routes";
import Link from "next/link";
import { ReactNode } from "react";
import { TbArticle, TbCalendar, TbRobot, TbStethoscope } from "react-icons/tb";

export default function HomeHero() {
  return (
    <>
      <div className="relative  min-h-[80vh] bg-no-repeat bg-cover aspect-auto">
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            controls={false}
            loop={true}
            className=" min-w-full min-h-full aspect-video object-cover "
            autoPlay={true}
            muted={true}
            playsInline
            poster="/img/SW-NL-8-1-23-WHTTA-SM.webp"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-base-300"></div>

        <div
          className={`absolute bottom-[30%] lg:bottom-[-15%]  px-5 py-4 max-w-[1280px] mx-auto container left-[50%] -translate-x-1/2 overflow-x-scroll`}
        >
          <div className="grid grid-cols-4 gap-4  min-w-max lg:min-w-auto px-3">
            <HeroCard
              key="find-doctor"
              link={routes.findDoctor()}
              title="Find a Doctor"
              icon={<TbStethoscope size={40} className="text-secondary" />}
            />
            <HeroCard
              key="symptom-checker"
              link={routes.symptomChecker()}
              title="Ai Symptom Checker"
              icon={<TbRobot size={40} className="text-secondary" />}
            />
            <HeroCard
              key="health-tips"
              title="Health Tips"
              link={routes.healthTips()}
              icon={<TbArticle size={40} className="text-secondary" />}
            />
            <HeroCard
              key="book-appointments"
              link={routes.bookAppontments()}
              title="Book Appointments"
              icon={<TbCalendar size={40} className="text-secondary" />}
            />
          </div>
        </div>
      </div>
      <div className="h-36 w-full bg-secondary/10 hidden lg:block"></div>
    </>
  );
}

interface HeroCardProps {
  link: string;
  title: string;
  icon: ReactNode;
}

const HeroCard = (props: HeroCardProps) => {
  return (
    <Link
      href={props.link}
      className="flex flex-col items-center justify-center text-center bg-base-100 rounded-2xl p-5 gap-4 w-[14rem] lg:w-auto shadow-sm hover:shadow-lg transition-[box-shadow] group duration-700"
    >
      {props.icon}
      <p className="font-bold max-w-28 text-center group-hover:-translate-y-2 transition-[translate] duration-700 text-xl w-full">
        {props.title}
      </p>
    </Link>
  );
};