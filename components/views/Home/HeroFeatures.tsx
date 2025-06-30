import MotionDiv from "@/components/motion/MotionDiv";
import MotionH2 from "@/components/motion/MotionH2";
import MotionP from "@/components/motion/MotionP";
import SectionImg from "@/public/img/ladies-with-tablet.jpg";
import Image from "next/image";

export default function HeroFeatures() {
  return (
    <div className="overflow-hidden py-16 mx-auto max-w-7xl px-5">
      <div>
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8 text-base">
            <div>
              <MotionH2
                className="text-3xl font-bold"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                Key Features and What we Offer
              </MotionH2>
              <MotionP
                className="mt-6 text-base-content"
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                }}
              >
                Our platform is designed to make healthcare simpler, smarter,
                and more accessible. Whether you&apos;re looking for quick
                health advice, need to consult a doctor, or want to manage your
                appointments and tests—all in one place—we&apos;ve got you
                covered. Here are some of the key features that help us bring
                modern healthcare to your fingertips:v
              </MotionP>
              <dl className="mt-4 max-w-xl space-y-1 text-gray-600 lg:max-w-none">
                <MotionDiv
                  className="relative pl-9"
                  initial={{ opacity: 0, translateY: 100 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <dt className="inline font-semibold text-base-content">
                    <span className="absolute left-2 icon-[tabler--ai] size-6 text-neutral"></span>
                    AI-Powered Health Tips:
                  </dt>
                  <dd className="inline">
                    &apos; Get personalized wellness advice based on your
                    symptoms.
                  </dd>
                </MotionDiv>
                <MotionDiv
                  className="relative pl-9"
                  initial={{ opacity: 0, translateY: 100 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <dt className="inline font-semibold text-base-content">
                    <span className="absolute left-2 top-1 icon-[tabler--circle-check] size-4 text-neutral"></span>
                    Symptom Checker:
                  </dt>
                  <dd className="inline">
                    &apos; Describe how you&apos;re feeling, and our smart
                    assistant will guide you.
                  </dd>
                </MotionDiv>
                <MotionDiv
                  className="relative pl-9"
                  initial={{ opacity: 0, translateY: 100 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <dt className="inline font-semibold text-base-content">
                    <span className="absolute left-2 top-1 icon-[tabler--stethoscope] size-4 text-neutral"></span>
                    Doctor Consultations:
                  </dt>
                  <dd className="inline">
                    &apos; Connect with verified doctors near you or book
                    virtual consultations.
                  </dd>
                </MotionDiv>
                <MotionDiv
                  className="relative pl-9"
                  initial={{ opacity: 0, translateY: 100 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <dt className="inline font-semibold text-base-content">
                    <span className="absolute left-2 top-1 icon-[tabler--checkup-list] size-4 text-neutral"></span>
                    Medical Reports & Tests:
                  </dt>
                  <dd className="inline">
                    &apos; Connect with verified doctors near you or book
                    virtual consultations.
                  </dd>
                </MotionDiv>
                <MotionDiv
                  className="relative pl-9"
                  initial={{ opacity: 0, translateY: 100 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <dt className="inline font-semibold text-base-content">
                    <span className="absolute left-2 top-1 icon-[tabler--calendar-clock] size-4 text-neutral"></span>
                    Easy Appointments:
                  </dt>
                  <dd className="inline">
                    &apos; Book, reschedule, or cancel with a few clicks.
                  </dd>
                </MotionDiv>
              </dl>
            </div>
          </div>
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
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-2 lg:mt-12"
            />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
