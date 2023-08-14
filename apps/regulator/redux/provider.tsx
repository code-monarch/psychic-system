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
        <ToastContainer
          autoClose={4000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          transition={Slide}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        {children}
      </TooltipPrimitive.Provider>
    </Provider>
  );
}
