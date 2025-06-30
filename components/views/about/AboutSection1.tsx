import { routes } from "@/utills/routes";
import Link from "next/link";

export default function AboutSection1() {
  return (
    <div>
      <div className="relative max-w-7xl mx-auto text-secondary min-h-[500px] px-5 sm:px-10 py-20 z-30">
        <h1 className="text-4xl font-bold max-w-xl mb-4 ">
          About Us - We practice AI so physicians can practice medicine
        </h1>
        <p className="max-w-xl text-white/80 mb-8">
          Empowering clinicians to deliver personalized, proactive care with
          clinical insights they can trust, right in the moment of care
        </p>
        <Link href={routes.contact()}>
          <button className="btn btn-primary">Contact Us</button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto min-h-[500px] px-5 sm:px-10">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-4">
          We’re a team of healthcare professionals, technologists, and designers
          passionate about simplifying healthcare for everyone. Our platform
          combines the power of artificial intelligence with real human care to
          guide users through their health journey – from symptom checking to
          treatment and recovery.
        </p>
        <br />
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          To make quality healthcare accessible, proactive, and personalized for
          everyone.
        </p>
        <br />

        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="mb-4">
          <li>
            <strong>For Patients:</strong> A smart assistant that listens,
            suggests, and connects you with the right care at the right time.
          </li>
          <li>
            <strong>For Doctors & Clinics:</strong> A seamless platform to
            manage appointments, patient interactions, and medical reporting.
          </li>
          <li>
            <strong> Diagnostic Labs:</strong> Integration to help patients find
            and book tests conveniently.
          </li>
        </ul>
        <br />
        <h2 className="text-2xl font-semibold mb-4">Why We Built This</h2>
        <p className="mb-4">
          Many people delay care due to confusion or lack of access. We created
          this platform to remove barriers, offer early insights, and build a
          connected care experience where patients feel supported every step of
          the way.
        </p>
        <br />
        <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
        <ul className="mb-4">
          <li>AI-powered yet human-centric</li>
          <li>End-to-end care ecosystem</li>
          <li>Focus on preventive care, not just reactive</li>
          <li>Localized services tailored to your area</li>
        </ul>
        <br />
      </div>
      <div className="absolute top-0 z-10 w-full bg-[url('/img/ai-healthcare-inset.webp')] min-h-[500px] bg-center bg-no-repeat bg-cover brightness-[25%]"></div>
    </div>
  );
}
