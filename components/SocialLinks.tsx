import appConfig from "@/utills/appConfig";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandPinterest,
  TbBrandX,
  TbBrandYoutube,
} from "react-icons/tb";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-1 flex-wrap text-secondary">
      <a
        href={appConfig.social.facebook}
        target="_blank"
        className="btn btn-text btn-secondary btn-square"
      >
        <TbBrandFacebook className="size-5" />
      </a>
      <a
        href={appConfig.social.insta}
        target="_blank"
        className="btn btn-text btn-secondary btn-square"
      >
        <TbBrandInstagram className="size-5" />
      </a>
      <a
        href={appConfig.social.pintrest}
        target="_blank"
        className="btn btn-text btn-secondary btn-square"
      >
        <TbBrandPinterest className="size-5" />
      </a>
      <a
        href={appConfig.social.x}
        target="_blank"
        className="btn btn-text btn-secondary btn-square"
      >
        <TbBrandX className="size-5" />
      </a>
      <a
        href={appConfig.social.youtube}
        target="_blank"
        className="btn btn-text btn-secondary btn-square"
      >
        <TbBrandYoutube className="size-5" />
      </a>
      <a
        href={appConfig.social.linkedIn}
        target="_blank"
        className="btn btn-text btn-secondary btn-square"
      >
        <TbBrandLinkedin className="size-5" />
      </a>
    </div>
  );
}
