import { type Metadata } from "next";
import appConfig from "./appConfig";

interface createMetadataProps {
  title: string;
  description?: string;
  keywords?: string;
  authorNpublisher?: string;
  imageUrl?: string;
  type?:
    | "website"
    | "article"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";
  robots?: "nonoindex" | "noindex" | "noindex, nofollow";
  canoical?: string;
}

export default function createMetadata(props: createMetadataProps): Metadata {
  return {
    title: props.title,
    description: props.description,
    authors: [{ name: props.authorNpublisher }],
    publisher: props.authorNpublisher,
    openGraph: {
      title: props.title,
      description: props.description,
      images: props.imageUrl,
      type: props.type ?? "website",
    },
    robots: props.robots,
    alternates: {
      languages: { "en-US": appConfig.appUrl },
      ...(props.canoical ? { canonical: { url: props.canoical } } : {}),
    },
  };
}
