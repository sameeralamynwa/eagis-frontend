import type { ReactNode } from "react";

interface DropdownProps {
  id: string;
  btn: ReactNode;
  list: ReactNode[];
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="dropdown relative inline-flex rtl:[--placement:bottom-end]">
      {props.btn}
      <ul
        className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={props.id}
      >
        {props.list.map((List, i) => (
          <li className="" key={i}>
            {List}
          </li>
        ))}
      </ul>
    </div>
  );
}
