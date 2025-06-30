"use client";

import { useEffect, useRef, useState } from "react";
import avatar from "@/public/img/symptom-checker-avatar.webp";
import appConfig from "@/utills/appConfig";

interface ChatMessage {
  type: "sender" | "reciever";
  content: string;
  avatar: string;
}

export default function useSymptomChecker() {
  const [loadingResponse, setLoadingResponse] = useState(false);
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "reciever",
      content: `Hi, There i am ${appConfig.symptomCheckerName}, an AI Symptom checker working for ${appConfig.appName}. How can i help you today`,
      avatar: avatar.src,
    },
  ]);

  const timOutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutEffect = () => {
    if (timOutRef.current != null) {
      clearTimeout(timOutRef.current);
      timOutRef.current = null;
    }
  };

  const scrollDivToBottom = () => {
    setTimeout(() => {
      if (scrollDivRef.current) {
        scrollDivRef.current.scrollIntoView();
      }
    }, 100);
  };

  const aiResponse = async () => {
    clearTimeoutEffect();
    setLoadingResponse(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        setLoadingResponse(false);
        setMessages((state) => [
          ...state,
          {
            type: "reciever",
            content: "You might have a cold, Please consult with a doctor.",
            avatar: avatar.src,
          },
        ]);
        resolve({});
      }, 3000);
    });
  };

  const sendMessage = async (message: ChatMessage) => {
    setMessages((state) => [...state, message]);
    scrollDivToBottom();
    await aiResponse();
    scrollDivToBottom();
  };

  useEffect(() => {
    return () => {
      clearTimeoutEffect();
    };
  }, []);

  return {
    messages,
    sendMessage,
    loadingResponse,
    scrollDivRef,
    scrollDivToBottom,
  };
}
