import BlogCard from "@/components/BlogCard";
import Carousel1 from "@/components/carousel/Carousel1";
import { sampleBlogList } from "@/data/blogs";

export default function HealthTipDetailRecentArticles() {
  return (
    <div className="container max-w-[1280px] mx-auto space-y-10 px-5">
      <h3 className="text-3xl text-center font-bold">Similar Articles</h3>
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
    </div>
  );
}
