import Image from "next/image";

interface ChatBubbleProps {
  type: "reciever" | "sender";
  avatar: string;
  message: string;
}

export default function ChatBubble(props: ChatBubbleProps) {
  return (
    <div
      className={`chat ${
        props.type === "reciever" ? "chat-receiver" : "chat-sender"
      }`}
    >
      <div className="chat-avatar avatar">
        <div className="size-10 rounded-full">
          <Image src={props.avatar} alt="avatar" width={50} height={50} />
        </div>
      </div>
      <div
        className={`chat-bubble ${
          props.type === "reciever" ? "!bg-gray-200" : "!bg-primary"
        }`}
      >
        {props.message}
      </div>
    </div>
  );
}
