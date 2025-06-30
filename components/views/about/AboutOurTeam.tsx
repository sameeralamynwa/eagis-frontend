import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/teamMembers";

export default function AboutOurTeam() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* <!-- Section Header --> */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-primary">
            Meet Our Talented Team
          </h2>
          <p>
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>

        {/* <!-- Team Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Team Members --> */}
          {teamMembers.map((member, i) => (
            <TeamMemberCard
              key={i}
              img={member.img}
              name={member.name}
              role={member.role}
              desc={member.desc}
            />
          ))}
        </div>

        {/* <!-- Join Our Team CTA --> */}
        <div className="mt-20 text-center">
          <button className="btn btn-primary btn-lg">Join Our Team</button>
        </div>
      </div>
    </section>
  );
}
