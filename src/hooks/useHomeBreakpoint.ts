import { useEffect, useState } from "react";

const SM_QUERY = "(min-width: 480px)";
const LG_QUERY = "(min-width: 1024px)";

function readBreakpoints() {
  return {
    isSm: window.matchMedia(SM_QUERY).matches,
    isLg: window.matchMedia(LG_QUERY).matches,
  };
}

export function useHomeBreakpoint() {
  const [breakpoints, setBreakpoints] = useState(readBreakpoints);

  useEffect(() => {
    const sm = window.matchMedia(SM_QUERY);
    const lg = window.matchMedia(LG_QUERY);

    const update = () => setBreakpoints(readBreakpoints());

    sm.addEventListener("change", update);
    lg.addEventListener("change", update);

    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  return breakpoints;
}
