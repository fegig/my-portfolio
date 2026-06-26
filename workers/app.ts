import { createRequestHandler } from "react-router";

export interface Env {
  ASSETS: Fetcher;
}


const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request: Request) {
    return requestHandler(request);
  },
} satisfies ExportedHandler<Env>;
