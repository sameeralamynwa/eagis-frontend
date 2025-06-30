import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Privacy - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.privacy(),
});

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16 prose">
      <section>
        <h1>Privacy Policy & Terms of Service</h1>
        <p>
          <strong>Effective Date:</strong> {new Date().toDateString()}
        </p>
      </section>
      <section>
        <h2>1. Introduction</h2>
        <p>
          By using our website or mobile application (&quot;Platform&quot;), you
          agree to these Terms of Service (&quot;Terms&quot;) and consent to our
          privacy practices described here. If you do not agree, please do not
          use the Platform.
        </p>
      </section>

      <section>
        <h2>2. Our Services</h2>
        <ul>
          <li>User registration and profile management</li>
          <li>AI-generated health tips based on submitted symptoms</li>
          <li>Nearby clinic and doctor recommendations</li>
          <li>Appointment booking with medical professionals</li>
          <li>Healthcare providers managing appointments and reports</li>
        </ul>
      </section>

      <section>
        <h2>3. User Eligibility</h2>
        <p>
          You must be at least 18 years old or of legal age in your region to
          use the Platform. By registering, you agree that your provided
          information is accurate and truthful.
        </p>
      </section>

      <section>
        <h2>4. Privacy Policy</h2>

        <h3>a. Information We Collect</h3>
        <ul>
          <li>
            <strong>Personal Info:</strong> Name, email, phone number, age,
            gender, location
          </li>
          <li>
            <strong>Health Data:</strong> Symptoms, conditions, health history
            (submitted by user)
          </li>
          <li>
            <strong>Doctor Info:</strong> Credentials, clinic details,
            availability
          </li>
          <li>
            <strong>Usage Data:</strong> Device info, actions on the platform
          </li>
        </ul>

        <h3>b. How We Use Your Information</h3>
        <ul>
          <li>Provide AI-generated health suggestions</li>
          <li>Recommend relevant clinics and providers</li>
          <li>Facilitate appointment bookings and notifications</li>
          <li>Allow healthcare providers to manage reports and visits</li>
          <li>Improve our services and personalize user experience</li>
        </ul>

        <h3>c. Data Sharing</h3>
        <p>We do not sell or rent your data. We may share it with:</p>
        <ul>
          <li>Authorized healthcare providers (with your consent)</li>
          <li>
            Service providers for platform operations (e.g., hosting, SMS)
          </li>
          <li>Authorities if legally required</li>
        </ul>

        <h3>d. Security</h3>
        <p>
          We use encryption and best practices to protect your data. However, no
          system is completely secure. Keep your login credentials private.
        </p>

        <h3>e. Data Retention</h3>
        <p>
          We retain your data as needed to provide our services or as required
          by law.
        </p>
      </section>

      <section>
        <h2>5. Terms of Service</h2>

        <h3>a. User Responsibilities</h3>
        <ul>
          <li>Use the Platform lawfully and ethically</li>
          <li>Provide accurate and complete information</li>
          <li>Do not impersonate others or misuse AI tools</li>
          <li>Follow healthcare rules and laws (for providers)</li>
        </ul>

        <h3>b. AI Limitations</h3>
        <p>
          Our AI is informational only. It does not replace professional medical
          advice. Always consult licensed doctors for medical concerns.
        </p>

        <h3>c. Doctor Responsibilities</h3>
        <ul>
          <li>Maintain valid medical licenses and certifications</li>
          <li>Properly manage appointments and documentation</li>
          <li>Ensure patient data privacy and confidentiality</li>
        </ul>

        <h3>d. Appointments & Reports</h3>
        <ul>
          <li>
            Patients are responsible for timely attendance and complete symptom
            input
          </li>
          <li>
            Doctors must generate accurate reports and keep them confidential
          </li>
        </ul>
      </section>

      <section>
        <h2>6. User Rights</h2>
        <p>You may request:</p>
        <ul>
          <li>Access or correction of your data</li>
          <li>Data deletion (where applicable)</li>
          <li>Withdrawal of consent</li>
        </ul>
        <p>
          Contact us at:{" "}
          <a href={appConfig.social.email}>
            {appConfig.social.email.replace("mailto:", "")}
          </a>
        </p>
      </section>

      <section>
        <h2>7. Modifications</h2>
        <p>
          We may update this policy occasionally. Updates will be posted on the
          Platform and/or emailed to registered users. Continued use implies
          acceptance.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>Have questions or concerns?</p>
        <ul>
          <li>
            Email:{" "}
            <a href={appConfig.social.email}>
              {appConfig.social.email.replace("mailto:", "")}
            </a>
          </li>
          <li>Address: {appConfig.social.address}</li>
        </ul>
      </section>
    </div>
  );
}
