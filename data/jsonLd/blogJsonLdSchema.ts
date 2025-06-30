import appConfig from "@/utills/appConfig";
import { routes } from "@/utills/routes";
import type { BlogPosting, WithContext } from "schema-dts";

export function blogJsonLdSchema(blog: any): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.name,
    url: appConfig.appUrl + routes.healthTipDetail(blog.slug),
    image: blog.image?.url,
    description: blog.shortDesc,
    dateCreated: blog.created_at,
    keywords: blog.seo?.metaKeywords || "",
    author: {
      "@type": "LocalBusiness",
      name: " Opt Flow",
      address: {
        "@type": "PostalAddress",
        streetAddress: "84 South Road",
        addressLocality: "Southall",
        addressRegion: "USA",
        postalCode: "UB1 &*%",
        addressCountry: "USA",
      },
      url: "https://www.opt-flow.com",
      telephone: "+44157892143",
      image: "https://www.opt-flow.com/logo.png",
    },
  };
}
