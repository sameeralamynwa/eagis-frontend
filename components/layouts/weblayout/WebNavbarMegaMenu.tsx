import ActiveRoute from "@/components/ActiveRoute";
import { routes } from "@/utills/routes";
import Link from "next/link";

export default function WebLayoutMegaMenu() {
  return (
    <div className="dropdown [--adaptive:none] [--auto-close:inside] [--strategy:static]  md:[--strategy:absolute]">
      <ActiveRoute routName={"asasa"}>
        <button
          type="button"
          className="dropdown-toggle btn btn-text !rounded-sm text-base-content/80 dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-3 text-nowrap group-[.active]:font-bold group-[.active]:border-b-2 group-[.active]:!rounded-b-none"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          Ai Care
          <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
      </ActiveRoute>
      <div
        className="dropdown-menu dropdown-open:opacity-100 start-0 top-full hidden w-full min-w-60 rounded-lg p-0 opacity-0 shadow-xl border border-base-content/10 transition-[opacity,margin]  before:absolute"
        role="menu"
        aria-orientation="vertical"
      >
        <ul className="menu md:menu-horizontal rounded-box w-full max-xl:gap-4 max-md:border shadow-base-300/20 md:shadow-sm max-md:border-base-content/20">
          <li>
            <a href="#" className="menu-title">
              Patient Services
            </a>
            <ul className="menu">
              <li>
                <Link href={routes.symptomChecker()}>Ai Symptom Checker</Link>
              </li>
              <li>
                <Link href={routes.bookAppontments()}>
                  Appointment Bookings
                </Link>
              </li>
              <li>
                <a href={routes.findDoctor()}>Find Doctor</a>
              </li>
              <li>
                <a href="#">Ai Health Tips</a>
              </li>
              <li>
                <a href="#">Track Medical History</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-title">
              Healthcare Providers
            </a>
            <ul className="menu">
              <li>
                <a href="#">Manange Appointment</a>
              </li>
              <li>
                <a href="#">Management Pateints</a>
              </li>
              <li>
                <a href="#">Generate Medical Reports</a>
              </li>
              <li>
                <a href="#">Realtime Notifications</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-title">
              Product Offerings
            </a>
            <ul className="menu">
              <li>
                <a href="#">Ai Services</a>
              </li>
              <li>
                <a href="#">Connect with Health Apps</a>
              </li>
              <li>
                <a href="#">Nearby Healthcare Search</a>
              </li>
              <li>
                <a href="#" className="menu-title">
                  More Feature
                </a>
                <ul className="menu">
                  <li>
                    <a href="#">Feature 1</a>
                  </li>
                  <li>
                    <a href="#">Feature 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
