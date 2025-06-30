import appConfig from "@/utills/appConfig";
import { routes } from "@/utills/routes";
import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/public/logo.png";

interface AppLogoProps {
  hideTextBelowSm?: boolean;
  lightTheme?: boolean;
}

export default function AppLogo(props: AppLogoProps) {
  return (
    <Link
      href={routes.home()}
      className="flex justify-center items-center gap-1"
      title="Home"
    >
      <div className="flex justify-center items-center">
        <Image
          className={`h-8 w-8 object-contain`}
          src={LogoImg}
          alt="Opt Flow logo"
          title="Opt Flow logo"
        />
      </div>
      <div
        className={`text-2xl font-bold ${
          props.hideTextBelowSm ? "hidden sm:block" : "block"
        } ${props.lightTheme && "text-white"}`}
      >
        {appConfig.appName}
      </div>
    </Link>
  );
}
