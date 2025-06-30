import appConfig from "@/utills/appConfig";
import { routes } from "@/utills/routes";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  img?: string;
  title: string;
  slug: string;
  desc: string;
  date: string;
}

export default function BlogCard(porps: BlogCardProps) {
  return (
    <div className="relative border border-base-content/20 rounded-2xl shadow hover:shadow-2xl transition-[box-shadow]">
      <Link
        href={routes.healthTipDetail(porps.slug)}
        className="block overflow-hidden group rounded-xl shadow-lg"
      >
        <Image
          src={porps.img || appConfig.placeholderImg}
          className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
          alt="Ocean"
          width={500}
          height={500}
        />
      </Link>
      <div className="relative mt-5 p-3 px-5">
        <p className="uppercase font-semibold text-xs mb-2.5 text-primary">
          {porps.date}
        </p>
        <Link
          href={routes.healthTipDetail(porps.slug)}
          className="block mb-3 hover:underline"
        >
          <h2 className="text-xl font-bold leading-6 transition-colors duration-200 hover:text-primary line-clamp-2">
            {porps.title}
          </h2>
        </Link>
        <p className="mb-4 line-clamp-3 min-h-16 text-base">{porps.desc}</p>
        <Link
          href={routes.healthTipDetail(porps.slug)}
          className="font-bold underline text-secondary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
