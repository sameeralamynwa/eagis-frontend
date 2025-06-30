import HealthTipDetailRecentArticles from "@/components/views/healthTipDetail/HealthTipDetailRecentArticles";
import { sampleBlog } from "@/data/blogs";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import Image from "next/image";
import Link from "next/link";

interface HealthTipDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: HealthTipDetailPageProps) {
  const { slug } = await props.params;

  /**
   * fetch blog data here and return meta tags...
   */
  // const { data } = await customFetch<ResType<Blog>>(apiRoutes.blogView(slug));
  // const blog = data?.data;
  // if (!blog) {
  //   notFound();
  // }

  return createMetadata({
    title: `Blog Detail - ${appConfig.appName}`,
    description: "Get Health tips",
    keywords: "Health tips, health articals",
    authorNpublisher: appConfig.appName,
    imageUrl: "/logo.png",
    canoical: appConfig.appUrl + routes.healthTipDetail(slug),
    type: "article",
  });
}

export default async function HealthTipDetailPage(/*props: HealthTipDetailPageProps*/) {
  // const { slug } = await props.params;
  // fetch blog detail here

  return (
    <>
      <div className="w-full mt-16 max-w-5xl mx-auto">
        <Image
          src={sampleBlog.image}
          alt="Featured Image"
          className="w-full max-h-[500px] object-cover rounded"
          width={400}
          height={1000}
        />
      </div>
      <div className="max-w-5xl mx-auto my-8 px-3 sm:px-5 xl:px-0 flex flex-wrap justify-between">
        <div className="w-full lg:w-9/12 mb-8">
          <h2 className="text-4xl font-bold mb-2">{sampleBlog.title}</h2>
          <p className="text-gray-700 mb-4">{sampleBlog.shortDesc}</p>
          <div>{sampleBlog.longDesc}</div>
        </div>
        <div className="w-full lg:w-3/12 mb-8 pl-0 lg:pl-4">
          <div className="bg-gray-100 px-4 py-6  rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul className="list-inside">
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
                <li key={i}>
                  <Link
                    href={routes.healthTips() + "?category=symptom-guides"}
                    className="link link-secondary hover:underline"
                  >
                    {catg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div>
        <HealthTipDetailRecentArticles />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
