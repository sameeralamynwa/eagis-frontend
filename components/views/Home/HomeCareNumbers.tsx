import MotionDiv from "@/components/motion/MotionDiv";
import MotionH2 from "@/components/motion/MotionH2";
import { TbGymnastics, TbHealthRecognition, TbHospital } from "react-icons/tb";

export default function HomeCareNumbers() {
  return (
    <div className="bg-primary text-primary-content py-16 px-5">
      <div className="max-w-[1280px] mx-auto container">
        <MotionH2
          className="text-center font-bold mb-16 text-3xl"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          Care in Numbers
        </MotionH2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              <TbHospital size={50} />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="text-3xl md:text-5xl font-bold text-emerald-300 text-center"
            >
              6
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              Hospitals
            </MotionDiv>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              <TbHealthRecognition size={50} />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="text-3xl md:text-5xl font-bold text-emerald-300 text-center"
            >
              26
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              Healthcares
            </MotionDiv>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              <TbGymnastics size={50} />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="text-3xl md:text-5xl font-bold text-emerald-300 text-center"
            >
              21
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              Medical Fitness Center
            </MotionDiv>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              <TbHospital size={50} />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="text-3xl md:text-5xl font-bold text-emerald-300 text-center"
            >
              9411
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              Healthcare Professionals
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
