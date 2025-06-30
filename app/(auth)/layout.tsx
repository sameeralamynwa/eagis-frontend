import SocialLinks from "@/components/SocialLinks";
import AppLogo from "@/components/AppLogo";
import appConfig from "@/utills/appConfig";

export default function WebSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto p-5 flex flex-col justify-between  min-h-[95vh]">
      <nav className="px-4 flex justify-center sm:justify-start border-b border-base-content/30 pb-3 w-full">
        <AppLogo />
      </nav>

      <div className="flex justify-center my-16 grow">{children}</div>
      <footer className="flex items-center  gap-4 flex-wrap-reverse justify-center md:justify-between border-t border-base-content/30 pt-4">
        <div className="text-sm">
          @ {new Date().getFullYear()} {appConfig.appName}. All Right Reserved
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
