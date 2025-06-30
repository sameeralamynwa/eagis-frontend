import Image from "next/image";
import MobileAppImg from "@/public/img/mobile-app.png";
import appConfig from "@/utills/appConfig";
import MotionH2 from "@/components/motion/MotionH2";
import MotionP from "@/components/motion/MotionP";
import MotionDiv from "@/components/motion/MotionDiv";

export default function HomeConnectWithus() {
  return (
    <div className="bg-secondary/10 py-10 md:py-5 px-5 sm:px-10 overflow-clip">
      <div className="max-w-[1280px] mx-auto container grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="md:col-span-2 h-full flex flex-col justify-center">
          <MotionH2
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            Connect with us anytime, anywhere
          </MotionH2>
          <MotionP
            className="text-base md:text-lg mb-6"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            Download Dubai Health App Now
          </MotionP>
          <MotionDiv
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            <a
              href={appConfig.apps.android}
              target="_blank"
              className="linknk link-hover"
            >
              <Image
                src="/img/google-playstore.png"
                alt={"Google playstore button for android app"}
                title="Playstore"
                width={150}
                height={50}
                className="h-8 md:h-14 w-auto"
              />
            </a>
            <a
              href={appConfig.apps.ios}
              target="_blank"
              className="linknk link-hover"
            >
              <Image
                src="/img/apple-store.png"
                alt={"Apple store button for Ios app"}
                title="Apple Store"
                width={150}
                height={50}
                className="h-8 md:h-14 w-auto"
              />
            </a>
          </MotionDiv>
        </div>
        <MotionDiv
          className="w-full flex justify-center"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            src={MobileAppImg}
            alt="Mobile App"
            title="Mobile App"
            className="relative max-h-[500px] w-auto md:translate-y-32"
          />
        </MotionDiv>
      </div>
    </div>
  );
}
