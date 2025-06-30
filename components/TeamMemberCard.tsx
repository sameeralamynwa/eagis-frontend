import { TbBrandLinkedinFilled, TbBrandX, TbMail } from "react-icons/tb";

interface TeamMemberCardProps {
  img: string;
  name: string;
  role: string;
  desc: string;
}

export default function TeamMemberCard(props: TeamMemberCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={props.img}
          alt="Team member"
          title="Team member photo"
          className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 flex justify-center items-center"
            >
              <TbBrandLinkedinFilled
                className="text-[var(--primary-color)]"
                size={20}
              />
            </a>
            <a
              href="#"
              className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 flex justify-center items-center"
            >
              <TbBrandX className="text-[var(--primary-color)]" size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 flex justify-center items-center"
            >
              <TbMail className="text-[var(--primary-color)]" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{props.name}</h3>
        <p className="text-primary font-medium">{props.role}</p>
        <p className="text-gray-600 mt-2">V{props.desc}</p>
      </div>
    </div>
  );
}
