"use client";
import type { HSOverlay } from "flyonui/flyonui";
import { useEffect, useRef, useState } from "react";

interface Options {
  onOpen?: () => void;
  onclose?: () => void;
}

export const useModal = (modalId: string, opt?: Options) => {
  const modal = useRef<HSOverlay | null>(null);

  const open = () => {
    if (modal.current) {
      modal.current.open();
    }
  };

  const close = () => {
    if (modal.current) {
      modal.current.close();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const modalElm = new window.HSOverlay(
        document.querySelector(`#${modalId}`)!
      );
      modal.current = modalElm;
    }, 700);
  }, []);

  useEffect(() => {
    if (modal.current) {
      if (opt?.onOpen) {
        modal.current.on("open", opt.onOpen);
      }
      if (opt?.onclose) {
        modal.current.on("close", opt.onclose);
      }
    }
  }, [modal.current]);

  return { open, close };
};
