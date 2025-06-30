import { ReactNode } from "react";

export interface AccordianProps {
  items: { id: string; title: ReactNode; desc: ReactNode }[];
}

export default function Accordian(props: AccordianProps) {
  return (
    <div className="accordion space-y-4">
      {props.items.map((item, i) => (
        <div
          className={`accordion-item ${
            i === 0 ? "active" : ""
          } accordion-item-active:border accordion-item-active:rounded-box  accordion-item-active:border-primary`}
          id={item.id}
          key={i}
        >
          <button
            className="accordion-toggle flex justify-between w-full items-center gap-x-4 text-start font-semibold bg-base-200/20"
            aria-labelledby={`${item.id}-heading`}
            aria-expanded={i === 0 ? "true" : "false"}
          >
            {item.title}
            <div>
              <span className="icon-[tabler--circle-plus] accordion-item-active:hidden text-base-content size-6 block shrink-0"></span>
              <span className="icon-[tabler--circle-minus] accordion-item-active:block text-base-content size-6 hidden shrink-0"></span>
            </div>
          </button>
          <div
            id={`${item.id}-collapse`}
            className="accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby={`${item.id}-heading`}
            role="region"
            style={{ display: i === 0 ? "block" : "none" }}
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
