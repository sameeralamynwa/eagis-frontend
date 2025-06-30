"use client";
import { type ReactNode, useEffect, useRef } from "react";

interface ScrollArrrowProps {
  children: ReactNode;
}

export default function ScrollArrrow(props: ScrollArrrowProps) {
  const navRef = useRef<HTMLDivElement>(null);

  const handleNav = (direction: "left" | "right") => {
    if (navRef.current) {
      if (direction === "left") {
        navRef.current.scrollLeft = navRef.current.scrollLeft - 200;
      }

      if (direction === "right") {
        navRef.current.scrollLeft = navRef.current.scrollLeft + 200;
      }
    }
  };

  useEffect(() => {
    const scrollContainer = navRef.current;
    if (!scrollContainer) return;

    const scrollToActive = () => {
      const activeEl = scrollContainer.querySelector(".active") as HTMLElement;
      if (activeEl) {
        // const containerRect = scrollContainer.getBoundingClientRect();
        // const activeRect = activeEl.getBoundingClientRect();

        const offsetLeft = activeEl.offsetLeft;
        const scrollTo =
          offsetLeft -
          scrollContainer.clientWidth / 2 +
          activeEl.clientWidth / 2;

        scrollContainer.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    };

    scrollToActive(); // Run on mount

    // Optional: Watch for mutation if active class is added dynamically
    const observer = new MutationObserver(() => {
      scrollToActive();
    });

    observer.observe(scrollContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute left-0 top-[50%] translate-y-[-50%] z-20">
        <button
          className="btn btn-sm btn-soft btn-secondary btn-circle"
          onClick={(e) => {
            e.stopPropagation();
            handleNav("left");
          }}
        >
          <span className="icon-[tabler--arrow-left]"></span>
        </button>
      </div>

      <div
        ref={navRef}
        className="w-full px-8 scrollbar-none overflow-x-scroll scroll-smooth"
      >
        {props.children}
      </div>
      <div className="absolute right-0 top-[50%] translate-y-[-50%] z-20">
        <button
          className="btn btn-sm btn-soft btn-secondary btn-circle"
          onClick={(e) => {
            e.stopPropagation();
            handleNav("right");
          }}
        >
          <span className="icon-[tabler--arrow-right]"></span>
        </button>
      </div>
    </div>
  );
}
