// global.d.ts
import { IStaticMethods, HSOverlay } from "flyonui/flyonui";

declare global {
  interface Window {
    // Optional third-party libraries
    // _;
    // $: typeof import("jquery");
    // jQuery: typeof import("jquery");
    // DataTable;
    // Dropzone;
    HSOverlay: typeof HSOverlay;
    HSStaticMethods: IStaticMethods;
  }
}

export {};
