"use client";

import Image from "next/image";
import avatar from "@/public/img/symptom-checker-avatar.webp";
import useFakeIndicator from "./useFakeIndicator";
import SymptomChekcer from "./SymptomChecker";
import { useSymptomCheckerContext } from "../context/SymptomCheckerContext";
import appConfig from "@/utills/appConfig";
import { usePathname } from "next/navigation";

export default function SymptomCheckerFloatting() {
  const indicator = useFakeIndicator();
  const { scrollDivToBottom } = useSymptomCheckerContext();
  const path = usePathname();
  const excludedPaths = ["/symptom-checker"];

  const shouldRender = () => {
    let render = true;
    excludedPaths.forEach((excludedPath) => {
      if (path.startsWith(excludedPath)) {
        render = false;
      }
    });
    return render;
  };

  return (
    <>
      {shouldRender() && (
        <div className="relative z-[4500]">
          <div className="tooltip fixed bottom-5 sm:bottom-8 right-5 sm:right-8 z-20">
            <div className="indicator indicator-end">
              {indicator && (
                <span className="indicator-item badge badge-error badge-sm rounded-full right-1 top-1">
                  1
                </span>
              )}
              <button
                type="button"
                className="btn btn-circle btn-primary btn-gradient btn-xl shadow-xl"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="symptom-checker"
                data-overlay="#symptom-checker"
                onClick={scrollDivToBottom}
              >
                <div className="avatar">
                  <div className="size-14 rounded-full mask-add">
                    <Image src={avatar} alt="avatar" width={50} height={50} />
                  </div>
                </div>
              </button>
            </div>
            <span
              className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
              role="tooltip"
            >
              <span className="tooltip-body tooltip-primary">
                {appConfig.symptomCheckerName} Ai Symptom Checker
              </span>
            </span>
          </div>
          <div className="rounded-full h-10 w-10 bg-primary fixed bottom-9 sm:bottom-12 right-7 sm:right-10 z-10 animate-ping duration-1000 delay-1000"></div>
          <div
            id="symptom-checker"
            className="overlay overlay-open:translate-x-0 drawer drawer-end lg:drawer-end hidden max-w-[600px]"
            role="dialog"
            tabIndex={-1}
          >
            <SymptomChekcer />
          </div>
        </div>
      )}
    </>
  );
}
