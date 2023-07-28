"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ToastContainer, Slide } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <Provider store={store}>
        <TooltipPrimitive.Provider
          delayDuration={0}
          skipDelayDuration={500}
          disableHoverableContent={false}
        >
          <ToastContainer autoClose={4000} transition={Slide} />
          {children}
        </TooltipPrimitive.Provider>
      </Provider>
  );
}
