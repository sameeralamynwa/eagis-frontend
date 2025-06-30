import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import ScrollArrrow from "@/components/ScrollArrow";
import { sampleBlogList } from "@/data/blogs";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: `Health Tips - ${appConfig.appName}`,
  description: "Get Health tips",
  keywords: "Health tips, health articals",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.healthTips(),
});

interface HealthTipsPageProps {
  searchParams: Promise<{ category: string }>;
}

export default async function HealthTipsPage(props: HealthTipsPageProps) {
  const { category } = await props.searchParams;
  return (
    <div className="max-w-7xl mx-auto my-16 px-5">
      <div className="text-center ">
        <h1 className="text-3xl font-bold mb-4">Health Tips & Articles</h1>
        <p className="max-w-xl mx-auto">
          Welcome to your personal guide to better health! Explore expert-backed
          articles, practical wellness tips, and updates designed to keep you
          informed and empowered.
        </p>
      </div>
      <br />
      <ScrollArrrow>
        <div className="text-nowrap space-x-4 px-2">
          <Link
            href={routes.healthTips() + "?category=symptom-guides"}
            className={`badge badge-primary rounded-full ${
              category === "symptom-guides"
                ? "badge-primary active"
                : "badge-soft"
            }`}
          >
            Symptom Guides
          </Link>
          {[
            "Healthy Living",
            "Mental Health",
            "Doctor Speaks",
            "Tech & Health",
            "Healthy Living",
            "Mental Health",
            "Doctor Speaks",
            "Tech & Health",
          ].map((catg, i) => (
            <Link
              key={i}
              href={routes.healthTips() + "?category=symptom-guides"}
              className={`badge rounded-full ${
                category === "other" ? "badge-primary active" : "badge-soft"
              }`}
            >
              {catg}
            </Link>
          ))}
        </div>
      </ScrollArrrow>
      <div className="py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {sampleBlogList.map((blog, i) => (
            <BlogCard
              key={i}
              img={blog.img}
              date={blog.date}
              title={blog.title}
              slug={blog.slug}
              desc={blog.desc}
            />
          ))}
        </div>
      </div>
      <br />
      <div className="flex justify-end mb-16">
        <Pagination
          nextPageUrl={"?page=2"}
          prevPageUrl={"?page=1"}
          links={[1, 2, 3, 4, 5].map((page) => ({
            url: "?page=" + page,
            active: false,
            label: page.toString(),
          }))}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Want Personalized Tips?</h2>
        <p>
          <Link
            href={routes.login()}
            className="underline text-primary font-semibold"
          >
            Login
          </Link>{" "}
          to get health articles and suggestions tailored to your symptoms and
          health profile.
        </p>
      </div>
    </div>
  );
}
