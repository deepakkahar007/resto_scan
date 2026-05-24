import "./index.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { ReactQuery } from "./integration/react-query/ReactQuery";
import { TanstackRouterProvider } from "./integration/react-router/TanstackRouterProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ReactQuery>
        <TooltipProvider>
          <TanstackRouterProvider />
        </TooltipProvider>
      </ReactQuery>
    </StrictMode>,
  );
}
