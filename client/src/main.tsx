import "./index.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { ReactQuery } from "./integration/react-query/ReactQuery";
import { TanstackRouterProvider } from "./integration/react-router/TanstackRouterProvider";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ReactQuery>
        <TanstackRouterProvider />
      </ReactQuery>
    </StrictMode>,
  );
}
