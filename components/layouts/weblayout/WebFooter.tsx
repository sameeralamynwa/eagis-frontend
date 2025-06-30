import Image from "next/image";
import LogoImg from "@/public/logo.png";
import appConfig from "@/utills/appConfig";
import Link from "next/link";
import { routes } from "@/utills/routes";
import SocialLinks from "@/components/SocialLinks";
import MotionDiv from "@/components/motion/MotionDiv";

export default function WebFooter() {
  return (
    <footer className="bg-primary text-primary-content px-5">
      <div className="container px-2 py-10 mx-auto max-w-[1280px] space-y-4">
        <MotionDiv
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <div className="flex flex-col items-center justify-center text-primary-content">
            <Image
              src={LogoImg}
              width={50}
              height={50}
              alt="App Logo"
              className="h-10 w-10"
            />
            <span>{appConfig.appName}</span>
          </div>
          <div className="h-[80%] border-l-2 border-primary-content/50 hidden md:block "></div>
          <div className="flex flex-col items-center sm:flex-row gap-6 font-bold">
            <Link href={routes.healthTips()}>Health Tips</Link>
            <Link href={routes.about()}>About us</Link>
            <Link href={routes.contact()}>Contact</Link>
            <Link href={routes.privacy()}>Privacy</Link>
          </div>
          <div className="grow flex justify-end">
            <div className="text-center">
              <div className="text-xs">Reach us on</div>
              <a
                className="text-secondary text-xl font-bold "
                href={`mailto:${appConfig.social.email}`}
              >
                {appConfig.social.email}
              </a>
            </div>
          </div>
        </MotionDiv>
        <div className="border-b border-primary-content/50 w-full h-1"></div>
        <MotionDiv
          className="flex items-center  gap-4 flex-wrap-reverse justify-center md:justify-between"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <div className="text-sm">
            @ {new Date().getFullYear()} {appConfig.appName}. All Right Reserved
          </div>
          <SocialLinks />
        </MotionDiv>
      </div>
    </footer>
  );
}
