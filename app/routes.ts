import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("services", "routes/services.tsx"),
  route("projects", "routes/projects.tsx"),
  route("about", "routes/about.tsx"),
  route("insights", "routes/insights.tsx"),
  route("contact", "routes/contact.tsx"),
  route("founder", "routes/founder.tsx"),
] satisfies RouteConfig;
