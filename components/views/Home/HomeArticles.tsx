import BlogCard from "@/components/BlogCard";
import Carousel1 from "@/components/carousel/Carousel1";
import MotionH2 from "@/components/motion/MotionH2";
import MotionP from "@/components/motion/MotionP";
import { sampleBlogList } from "@/data/blogs";
import { routes } from "@/utills/routes";
import Link from "next/link";

export default function HomeArticles() {
  return (
    <div className="container max-w-[1280px] mx-auto space-y-10 px-5 py-20">
      <MotionH2
        className="text-3xl text-center font-bold"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        Health Tips & Articles
      </MotionH2>
      <MotionP
        className="text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        Practical wellness tips, and updates designed to keep you informed and
        empowered.
      </MotionP>
      <br />
      <div>
        <Carousel1
          id="home-articles-carousel"
          height={550}
          slides={sampleBlogList.map((data, i) => (
            <BlogCard
              key={i}
              desc={data.desc}
              img={data.img}
              slug={data.slug}
              title={data.title}
              date={data.date}
            />
          ))}
        />
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href={routes.healthTips()}>
          <button className="btn btn-secondary btn-soft">
            View More Articles
          </button>
        </Link>
      </div>
    </div>
  );
}

// const Card = () => {
//   return (
//     <div>
//       <div></div>
//     </div>
//   );
// };
