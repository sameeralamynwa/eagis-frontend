import MotionDiv from "@/components/motion/MotionDiv";
import MotionH2 from "@/components/motion/MotionH2";

export default function HomeNewsLetter() {
  return (
    <div className="p-6 py-16 rounded md:px-12 md:py-20">
      <div className="flex flex-col items-center justify-between space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="max-w-2xl mb-4 text-center lg:mb-8">
          <MotionH2
            className="mb-2 text-3xl font-semibold"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            Subscribe to newsletter
          </MotionH2>
          <MotionDiv
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            Be the first to know about new features, health insights, and
            upcoming clinics. Subscribe to receive curated updates that matter
            to you. Get updates you care about — from smarter tools to better
            care options — right in your inbox.
          </MotionDiv>
        </div>
        <form>
          <MotionDiv
            className="space-y-4"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            <div>
              <label htmlFor="member_email" className="sr-only">
                Email address
              </label>
              <input
                className="input sm:w-96 input-lg"
                required
                placeholder="Your email address..."
                type="email"
              />
            </div>
            <div className="flex items-center justify-center revue-form-actions">
              <button type="submit" className="btn btn-primary">
                Join 10k+ others
              </button>
            </div>
          </MotionDiv>
        </form>
      </div>
    </div>
  );
}
