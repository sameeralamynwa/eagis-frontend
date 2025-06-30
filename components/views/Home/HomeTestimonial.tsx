import MotionDiv from "@/components/motion/MotionDiv";
import MotionH2 from "@/components/motion/MotionH2";
import MotionP from "@/components/motion/MotionP";
import TestimonialCard from "@/components/TestimonialCard";

export default function HomeTestimonial() {
  return (
    <div className="py-16 bg-secondary/10">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <MotionH2
            className="mb-4 text-3xl font-bold"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            What Users Are Saying
          </MotionH2>
          <MotionP
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            What Our Users Say – Real Stories, Real Impact.
          </MotionP>
        </div>
        <MotionDiv
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <TestimonialCard
            name="John Doe"
            handler="@johndoe"
            likes="115"
            message="Helped me book a doctor within minutes, and even guided me to a nearby
        lab!"
            dateTime={new Date().toString()}
          />
          <TestimonialCard
            name="John Doe"
            handler="@johndoe"
            likes="115"
            message="Helped me book a doctor within minutes, and even guided me to a nearby
        lab!"
            dateTime={new Date().toString()}
          />
          <TestimonialCard
            name="John Doe"
            handler="@johndoe"
            likes="115"
            message="Helped me book a doctor within minutes, and even guided me to a nearby
        lab!"
            dateTime={new Date().toString()}
          />
          <TestimonialCard
            name="John Doe"
            handler="@johndoe"
            likes="115"
            message="Helped me book a doctor within minutes, and even guided me to a nearby
        lab!"
            dateTime={new Date().toString()}
          />
          <TestimonialCard
            name="John Doe"
            handler="@johndoe"
            likes="115"
            message="Helped me book a doctor within minutes, and even guided me to a nearby
        lab!"
            dateTime={new Date().toString()}
          />
          <TestimonialCard
            name="John Doe"
            handler="@johndoe"
            likes="115"
            message="Helped me book a doctor within minutes, and even guided me to a nearby
        lab!"
            dateTime={new Date().toString()}
          />
        </MotionDiv>
      </div>
    </div>
  );
}
