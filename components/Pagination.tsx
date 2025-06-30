import Link from "next/link";

interface PaginationProps {
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
}

export default function Pagination(props: PaginationProps) {
  return (
    <nav className="flex flex-wrap items-center gap-1">
      <Link href={props.prevPageUrl || ""}>
        <button
          type="button"
          className="btn btn-soft "
          disabled={!props.prevPageUrl}
        >
          Previous
        </button>
      </Link>
      <div className="flex items-center flex-wrap gap-x-1">
        {props.links.map((link) => {
          return (
            <Link href={link.url} key={link.label}>
              <button
                type="button"
                className={
                  "btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary"
                }
                aria-current={link.active && "page"}
                key={link.label}
              >
                {link.label}
              </button>
            </Link>
          );
        })}
      </div>
      <Link href={props.nextPageUrl || ""}>
        <button
          type="button"
          className="btn btn-soft"
          disabled={!props.nextPageUrl}
        >
          Next
        </button>
      </Link>
    </nav>
  );
}
