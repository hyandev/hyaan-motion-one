import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const subscribe = (callback: () => void) => {
    if (typeof window === "undefined") return () => {};

    const mediaQueryList = window.matchMedia(query);

    mediaQueryList.addEventListener("change", callback);

    return () => {
      mediaQueryList.removeEventListener("change", callback);
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
