import { type ReactNode } from "react";

interface TabProps {
  type?: "pill" | "bordered";
  items: {
    id: string;
    header: ReactNode;
    content: ReactNode;
  }[];
}

export default function Tabs(props: TabProps) {
  return (
    <>
      {props.type === "bordered" && (
        <nav
          className="tabs tabs-bordered overflow-x-auto"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {props.items.map((item, i) => (
            <button
              type="button"
              className={`tab active-tab:tab-active active-tab:font-semibold ${
                i === 0 ? "active " : ""
              } hover:bg-primary/20 text-nowrap`}
              id={`${item.id}-item`}
              data-tab={`#${item.id}`}
              aria-controls={`${item.id}`}
              role="tab"
              aria-selected={i === 0 ? true : false}
              key={i}
            >
              {item.header}
            </button>
          ))}
          {/* <button type="button" className="tab active-tab:tab-active active" id="tabs-basic-item-1" data-tab="#tabs-basic-1" aria-controls="tabs-basic-1" role="tab" aria-selected="true" >
          Home
        </button> */}
        </nav>
      )}
      {(!props.type || props.type === "pill") && (
        <nav
          className="tabs tabs-lg overflow-x-auto space-x-1 rtl:space-x-reverse p-1 border-b border-base-content/25 pb-0 pl-0"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {props.items.map((item, i) => (
            <button
              type="button"
              className={`btn btn-text overflow-x-auto bg-primary/10 active-tab:bg-primary rounded-b-none active-tab:text-white hover:text-primary ${
                i === 0 ? "active" : ""
              } hover:bg-primary/20`}
              id={`${item.id}-item`}
              data-tab={`#${item.id}`}
              aria-controls={`${item.id}`}
              role="tab"
              aria-selected={i === 0 ? true : false}
              key={i}
            >
              {item.header}
            </button>
          ))}
        </nav>
      )}

      <div className="mt-3 transition duration-300">
        {props.items.map((item, i) => (
          <div
            id={item.id}
            role="tabpanel"
            aria-labelledby={`${item.id}-item`}
            key={i}
            className={i === 0 ? "" : "hidden"}
          >
            <div className="text-base-content/80">{item.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
