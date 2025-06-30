import MotionDiv from "@/components/motion/MotionDiv";
import MotionH2 from "@/components/motion/MotionH2";
import MotionLi from "@/components/motion/MotionLi";
import SectionImg from "@/public/img/doctor-with-microscope.jpg";
import Image from "next/image";

export default function HomeHowItWorks() {
  return (
    <div className="overflow-hidden pb-16 pt-4 mx-auto max-w-7xl px-5">
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <MotionDiv
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            src={SectionImg}
            alt="Ladies with tablet"
            title="Image showing Ladies with tablet checking symptoms, health tips"
            className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-2 lg:mt-6 order-2 lg:order-1"
          />
        </MotionDiv>
        <div className="lg:pt-4 lg:pr-8 text-base order-2 lg:order-1">
          <div className="w-ful px-5">
            <MotionH2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              How It Works
            </MotionH2>
            <ul>
              <MotionLi
                className="flex pb-3 mb-2 border-b border-gray-200"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="mr-8">
                  <span className="flex justify-center items-center w-7 h-7 bg-blue-200/50 /30  font-bold rounded-full text-blue-600 ">
                    1
                  </span>
                </div>
                <div className="">
                  <h3 className="font-bold text-base-content">
                    Create Your Account
                  </h3>
                  <p className="text-sm text-base-content/80">
                    Create your secure health profile.
                  </p>
                </div>
              </MotionLi>
              <MotionLi
                className="flex pb-3 mb-2 border-b border-gray-200"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="mr-8">
                  <span className="flex justify-center items-center w-7 h-7 bg-blue-200/50 /30  font-bold rounded-full text-blue-600">
                    2
                  </span>
                </div>
                <div className="">
                  <h3 className="font-bold text-base-content">Add Symptoms</h3>
                  <p className="text-sm text-base-content/80">
                    Describe what you&apos;re feeling.
                  </p>
                </div>
              </MotionLi>
              <MotionLi
                className="flex pb-3 mb-2 border-b border-gray-200"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="mr-8">
                  <span className="flex justify-center items-center w-7 h-7 bg-blue-200/50 /30  font-bold rounded-full text-blue-600 ">
                    3
                  </span>
                </div>
                <div className="">
                  <h3 className="font-bold text-base-content">
                    Get Suggestions
                  </h3>
                  <p className="text-sm text-base-content/80">
                    AI gives initial advice, or prompts for doctor visit.
                  </p>
                </div>
              </MotionLi>
              <MotionLi
                className="flex pb-3 mb-2 border-b border-gray-200"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="mr-8">
                  <span className="flex justify-center items-center w-7 h-7 bg-blue-200/50 /30  font-bold rounded-full text-blue-600 ">
                    4
                  </span>
                </div>
                <div className="">
                  <h3 className="font-bold text-base-content">
                    Book Appointments
                  </h3>
                  <p className="text-sm text-base-content/80">
                    Find and consult doctors or clinics nearby.
                  </p>
                </div>
              </MotionLi>
              <MotionLi
                className="flex pb-3 mb-2"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="mr-8">
                  <span className="flex justify-center items-center w-7 h-7 bg-blue-200/50 /30  font-bold rounded-full text-blue-600 ">
                    5
                  </span>
                </div>
                <div className="">
                  <h3 className="font-bold text-base-content">Receive Care</h3>
                  <p className="text-sm text-base-content/80">
                    Get prescriptions, medical reports, and test
                    recommendations.
                  </p>
                </div>
              </MotionLi>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
