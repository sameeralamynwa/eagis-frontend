"use client";

import { routes } from "@/utills/routes";
import Link from "next/link";
import LogoImg from "@/public/logo.png";
import Image from "next/image";
import appConfig from "@/utills/appConfig";
import WebLayoutMegaMenu from "./WebNavbarMegaMenu";
import ActiveRoute from "@/components/ActiveRoute";
import AuthMenu from "@/components/AuthMenu";
import { FaUserDoctor } from "react-icons/fa6";
import { TbX } from "react-icons/tb";

// <<< FIX: Remove 'async' as Client Components cannot be async
export default function WebNavbar() {
  return (
    <>
      <nav className="shadow-lg m-0 p-0  w-full top-0  bg-base-100 z-[119]">
        <div className="relative navbar px-2 py-4 max-w-[1280px] lg:h-24 mx-auto container">
          {/* logo */}
          {/* menus 1 */}
          <div className="flex items-center gap-2 mx-0 px-1">
            <div className=" px-0">
              <div className="flex justify-center items-center">
                <Link
                  href={routes.home()}
                  className="absolute bg-primary flex flex-col items-center justify-center text-primary-content w-20 lg:w-28 h-20 lg:h-28 top-0 left-4 lg:text-xl"
                >
                  <Image
                    src={LogoImg}
                    width={50}
                    height={50}
                    alt="App Logo"
                    className="h-8 lg:h-12 w-8 lg:w-12"
                  />
                  <span>{appConfig.appName}</span>
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-square btn-text ml-28 hidden lg:flex"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="sidebar"
              data-overlay="#sidebar"
            >
              <span className="icon-[tabler--menu-2] size-6"></span>
            </button>
            <div className="hidden lg:block">
              <WebLayoutMegaMenu />
            </div>

            <ul className="hidden lg:flex menu menu-xs menu-horizontal flex-nowrap gap-1 p-0">
              <li className="max-lg:hidden">
                <ActiveRoute routName={routes.healthTips()}>
                  <Link
                    className="text-base group-[.active]:font-bold group-[.active]:border-b-2 group-[.active]:rounded-b-none"
                    href={routes.healthTips()}
                  >
                    Health Tips
                  </Link>
                </ActiveRoute>
              </li>
              <li className="max-lg:hidden">
                <ActiveRoute routName={routes.about()}>
                  <Link
                    className="text-base group-[.active]:font-bold group-[.active]:border-b-2 group-[.active]:rounded-b-none"
                    href={routes.about()}
                  >
                    About Us
                  </Link>
                </ActiveRoute>
              </li>

              <li className="max-lg:hidden">
                <ActiveRoute routName={routes.faq()}>
                  <Link
                    className="text-base group-[.active]:font-bold group-[.active]:border-b-2 group-[.active]:rounded-b-none"
                    href={routes.faq()}
                  >
                    Faq
                  </Link>
                </ActiveRoute>
              </li>
              <li className="max-lg:hidden">
                <ActiveRoute routName={routes.contact()}>
                  <Link
                    className="text-base group-[.active]:font-bold group-[.active]:border-b-2 group-[.active]:rounded-b-none"
                    href={routes.contact()}
                  >
                    Contact
                  </Link>
                </ActiveRoute>
              </li>
            </ul>
          </div>

          {/* auth & menu */}
          <div className="navbar-end lg:grow flex items-center justify-end gap-4 w-full">
            <ul className="menu menu-xs menu-horizontal flex-nowrap gap-1 p-0">
              <li className="">
                <button className="btn btn-circle rounded-full btn-soft">
                  <span className="icon-[tabler--search] size-4"></span>
                </button>
              </li>
              <li className="max-lg:hidden">
                <Link
                  href={routes.bookAppontments()}
                  className="btn btn-secondary text-sm btn-soft"
                >
                  Book An Appointment
                </Link>
              </li>
              <li className="">
                <AuthMenu />
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-square btn-text flex lg:hidden"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="sidebar"
                  data-overlay="#sidebar"
                >
                  <span className="icon-[tabler--menu-2] size-6"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <div
        id="sidebar"
        className="overlay overlay-open:translate-x-0 drawer drawer-start hidden fixed z-[122]"
        role="dialog"
        tabIndex={-1}
      >
        <div className="drawer-top">
          <Link
            href={routes.home()}
            className="absolute bg-primary flex flex-col items-center justify-center text-primary-content w-20 lg:w-28 h-20 lg:h-28 top-0 left-4 lg:text-xl"
          >
            <Image
              src={LogoImg}
              width={50}
              height={50}
              alt="App Logo"
              className="h-8 lg:h-12 w-8 lg:w-12"
            />
            <span>{appConfig.appName}</span>
          </Link>
        </div>
        <div className="drawer-body mt-16 lg:mt-24 py-4">
          <ul className="menu  gap-1 p-0 mt-5">
            <li>
              <Link href={routes.home()} data-overlay="#sidebar">
                <span className="icon-[tabler--home] size-5"></span>
                Home
              </Link>
            </li>
            <li className="space-y-0.5">
              <a
                className="collapse-toggle collapse-open:bg-base-content/10"
                id="menu-app"
                data-collapse="#menu-app-collapse"
              >
                <span className="icon-[tabler--apps] size-5"></span>
                Ai Care
                <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4 transition-all duration-300"></span>
              </a>
              <ul
                id="menu-app-collapse"
                className="hidden collapse w-auto space-y-0.5 overflow-hidden transition-[height] duration-300"
                aria-labelledby="menu-app"
              >
                <li>
                  <Link href={routes.symptomChecker()} data-overlay="#sidebar">
                    <span className="icon-[tabler--message] size-5"></span>
                    Symptom Checker
                  </Link>
                </li>
                <li>
                  <Link href={routes.findDoctor()} data-overlay="#sidebar">
                    <FaUserDoctor className="size-5" />
                    Doctor Search
                  </Link>
                </li>
                <li className="space-y-0.5">
                  <a
                    className="collapse-toggle collapse-open:bg-base-content/10"
                    id="sub-menu-academy"
                    data-collapse="#sub-menu-academy-collapse"
                  >
                    <span className="icon-[tabler--book] size-5"></span>
                    Appointments
                    <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                  </a>
                  <ul
                    id="sub-menu-academy-collapse"
                    className="hidden collapse w-auto space-y-0.5 overflow-hidden transition-[height] duration-300"
                    aria-labelledby="sub-menu-academy"
                  >
                    <li>
                      <Link
                        href={routes.bookAppontments()}
                        data-overlay="#sidebar"
                      >
                        <span className="icon-[tabler--books] size-5"></span>
                        Book Appointments
                      </Link>
                    </li>
                    <li>
                      <a href="#" data-overlay="#sidebar">
                        <span className="icon-[tabler--list-details] size-5"></span>
                        Manage Appointments
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href={routes.about()} data-overlay="#sidebar">
                <span className="icon-[tabler--info-circle] size-5"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link href={routes.healthTips()} data-overlay="#sidebar">
                <span className="icon-[tabler--brand-blogger] size-5"></span>
                Health Tips
              </Link>
            </li>
            <li>
              <Link href={routes.faq()} data-overlay="#sidebar">
                <span className="icon-[tabler--help] size-5"></span>
                Faq
              </Link>
            </li>
            <li>
              <Link href={routes.contact()} data-overlay="#sidebar">
                <span className="icon-[tabler--address-book] size-5"></span>
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
          <br />
          <h3>{appConfig.appName} Heath App</h3>
          <br />
          <div className="flex gap-4">
            <a
              href={appConfig.apps.android}
              target="_blank"
              className="linknk link-hover"
            >
              <Image
                src="/img/google-playstore.png"
                alt={"Google playstore button for android app"}
                title="Playstore"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </a>
            <a
              href={appConfig.apps.ios}
              target="_blank"
              className="linknk link-hover"
            >
              <Image
                src="/img/apple-store.png"
                alt={"Apple store button for Ios app"}
                title="Apple Store"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
        <button
          className="absolute lg:hidden top-4 right-4 btn btn-circle btn-soft bg-base-100 text-base-content"
          data-overlay="#sidebar"
        >
          <TbX className="size-6" />
        </button>
      </div>
    </>
  );
}