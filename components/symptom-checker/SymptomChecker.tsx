"use client";

import Image from "next/image";
import avatar from "@/public/img/symptom-checker-avatar.webp";
import dummyAvatar from "@/public/img/dummy-avatar.jpg";
import ChatBubble from "../ChatBubble";
import { memo, useState } from "react";
import appConfig from "@/utills/appConfig";
import { useSymptomCheckerContext } from "../context/SymptomCheckerContext";

export default memo(function SymptomChecker() {
  const { messages, sendMessage, loadingResponse, scrollDivRef } =
    useSymptomCheckerContext();
  const [content, setContent] = useState("");

  const handleSubmitMessage = async () => {
    if (content.trim() === "") {
      return;
    }
    setContent("");
    sendMessage({
      type: "sender",
      content: content,
      avatar: dummyAvatar.src,
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-primary rounded-b-2xl p-5">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="size-12 rounded-full">
              <Image src={avatar} alt="avatar" width={50} height={50} />
            </div>
          </div>

          <div className="text-white">
            <h4 className="font-bold text-xl">
              {appConfig.symptomCheckerName}
            </h4>
            <p>AI Symptom checker</p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-text btn-circle absolute end-3 top-3 text-white"
          aria-label="Close"
          data-overlay="#symptom-checker"
        >
          <span className="icon-[tabler--x] size-8"></span>
        </button>
      </div>
      <div
        className="overflow-y-scroll scrollbar-none grow p-5"
        ref={scrollDivRef}
      >
        <div className="flex flex-col gap-2 justify-end py-6 min-h-full">
          {messages.map((msg, i) => (
            <ChatBubble
              key={i}
              type={msg.type}
              message={msg.content}
              avatar={msg.avatar}
            />
          ))}
          {loadingResponse && (
            <div className="w-full text-center py-2">
              <span className="loading loading-bars size-9 text-primary"></span>
            </div>
          )}
          <div className="opacity-0 P-1"></div>
        </div>
      </div>
      <div className="p-2">
        <div className="textarea">
          <textarea
            className="grow resize-none"
            placeholder="Please type your symptoms here.."
            rows={3}
            disabled={loadingResponse}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? handleSubmitMessage() : null
            }
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              className="btn btn-text h-full"
              onClick={handleSubmitMessage}
            >
              <span className="icon-[tabler--send-2] text-primary size-8 shrink-0"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
