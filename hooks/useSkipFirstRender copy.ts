import { type DependencyList, useEffect, useState } from "react";

export default function useSkipFirstRender(
  callBack: () => void,
  dependencies?: DependencyList | [],
  cleanup?: () => void,
) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return; // Skip first render
    }

    // Run effect and return cleanup function if there is one
    callBack();
    if (cleanup) {
      return cleanup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
