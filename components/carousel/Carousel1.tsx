import type { ReactNode } from "react";

interface Props {
  id: string;
  slides: ReactNode[];
  height?: number;
}

export default function Carousel1(props: Props) {
  return (
    <div
      id={props.id}
      data-carousel='{ "loadingClasses": "opacity-0", "dotsItemClasses": "carousel-dot carousel-active:bg-secondary carousel-active:w-10", "slidesQty": { "xs": 1,"sm": 2, "lg": 3 }, "isAutoPlay": true, "speed": 3000,   "isInfiniteLoop": false  }'
      className="relative w-full"
    >
      <div
        className="carousel"
        style={{
          height: props.height ? props.height : 300,
        }}
      >
        <div className="carousel-body h-full gap-8 opacity-0">
          {/* <!-- Slides --> */}
          {props.slides.map((slide, i) => (
            <div className="carousel-slide" key={i}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* <!-- Previous Slide --> */}
      <button
        type="button"
        className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
      >
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      {/* <!-- Next Slide --> */}
      <button
        type="button"
        className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
      >
        <span className="sr-only">Next</span>
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>

      {/* pagination dots */}
      <div className="carousel-pagination absolute bottom-4 end-0 start-0 flex justify-center gap-3"></div>
    </div>
  );
}
