import appConfig from "@/utills/appConfig";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  handler: string;
  message: string;
  likes: string;
  dateTime: string;
}

export default function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="p-6 bg-base-100 rounded-2xl border border-base-content/20 shadow-md transition-[translate,box-shadow] hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start mb-4 gap-2">
        <div className="avatar">
          <div className="size-14 rounded-full">
            <Image
              src={appConfig.dummyAvatar}
              alt="avatar"
              title="User profile pic"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold">{props.name}</h3>
          <p className="text-sm">{props.handler}</p>
        </div>
        <div className="ml-auto">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </svg>
        </div>
      </div>
      <p className="text-gray-700 text-sm">{props.message}</p>
      <div className="flex items-center mt-4">
        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        <span className="mr-4">{props.likes}</span>
        <span className="text-sm">
          {new Date(props.dateTime).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
