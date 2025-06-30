import { type MetadataRoute } from "next";
import { routes } from "../routes";

export function generateStaticSitemaps(appUrl: string): MetadataRoute.Sitemap {
  return [
    {
      url: `${appUrl}${routes.login()}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${appUrl}${routes.home()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${appUrl}${routes.about()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${appUrl}${routes.healthTips()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${appUrl}${routes.contact()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${appUrl}${routes.privacy()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${appUrl}${routes.faq()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
