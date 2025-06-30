import HeroFeatures from "@/components/views/Home/HeroFeatures";
import HomeArticles from "@/components/views/Home/HomeArticles";
import HomeCareNumbers from "@/components/views/Home/HomeCareNumbers";
import HomeConnectWithus from "@/components/views/Home/HomeConnectWithus";
import HomeHero from "@/components/views/Home/HomeHero";
import HomeHowItWorks from "@/components/views/Home/HomeHowItWorks";
import HomeNewsLetter from "@/components/views/Home/HomeNewsLetter";
import HomeTestimonial from "@/components/views/Home/HomeTestimonial";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCareNumbers />
      <HeroFeatures />
      <HomeHowItWorks />
      <HomeConnectWithus />
      <HomeArticles />
      <HomeTestimonial />
      <HomeNewsLetter />
    </>
  );
}