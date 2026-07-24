import { useEffect, useState } from "react";

const LG_QUERY = "(min-width: 1024px)";

function readBreakpoints() {
  return {
    isLg: window.matchMedia(LG_QUERY).matches,
  };
}

export function useHomeBreakpoint() {
  const [breakpoints, setBreakpoints] = useState(readBreakpoints);

  useEffect(() => {
    const lg = window.matchMedia(LG_QUERY);

    const update = () => setBreakpoints(readBreakpoints());

    lg.addEventListener("change", update);

    return () => {
      lg.removeEventListener("change", update);
    };
  }, []);

  return breakpoints;
}
