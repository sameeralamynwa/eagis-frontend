"use client";

import { useModal } from "@/hooks/useModal";
import { memo, ReactNode } from "react";

interface ModalProps {
  id: string;
  title: string;
  content: ReactNode;
  footer?: ReactNode;
  fullScreen?: boolean;
  size?: "modal-dialog-sm" | "modal-dialog-lg" | "modal-dialog-xl";
  static?: boolean;
  position?:
    | "modal-top-start"
    | "modal-top"
    | "modal-top-end"
    | "modal-middle-start"
    | "modal-middle"
    | "modal-middle-end"
    | "modal-bottom-start"
    | "modal-bottom"
    | "modal-bottom-end";
}

export default memo(function Modal(props: ModalProps) {
  const { close } = useModal(props.id);
  return (
    <div
      id={props.id}
      className={`overlay modal overlay-open:opacity-100 hidden ${
        props.position || ""
      } ${props.static && "[--overlay-backdrop:static]"}`}
      role="dialog"
      tabIndex={-1}
    >
      <div
        className={`modal-dialog overlay-open:opacity-100 min-w-0 ${
          props.fullScreen ? "max-w-none" : ""
        } ${props.size || ""} `}
      >
        <div
          className={`modal-content ${
            props.fullScreen ? "h-full max-h-none" : ""
          } justify-between"`}
        >
          <div className="modal-header">
            <h3 className="modal-title text-lg">{props.title}</h3>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm"
              aria-label="Close"
              onClick={close}
            >
              <span className="icon-[tabler--x] size-4"></span>
            </button>
          </div>
          <div className="modal-body grow">{props.content}</div>
          {props.footer && <div className="modal-footer">{props.footer}</div>}
        </div>
      </div>
    </div>
  );
});
