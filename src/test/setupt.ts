import React from "react";
import "@testing-library/jest-dom";

vi.mock("motion/react", async () => {
  const actual = await vi.importActual("motion/react");

  return {
    ...actual,
    motion: new Proxy(
      {},
      {
        get: (_, tag: string | symbol) => {
          if (tag === "create") {
            return (Component: any) => Component;
          }
          if (typeof tag === "string") {
            return (props: any) => React.createElement(tag, props);
          }
          return undefined;
        },
      },
    ),
  };
});

globalThis.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
} as any;
// Mock ResizeObserver
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
