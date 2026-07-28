import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "react-router";
import "./index.css";

export function loader({ request }: LoaderFunctionArgs) {
  return { origin: new URL(request.url).origin };
}

export const meta: MetaFunction<typeof loader> = ({ loaderData, location }) => {
  const origin = loaderData?.origin ?? "https://codewithfegig.com";
  const socialImage = `${origin}/og.png`;

  return [
    { name: "theme-color", content: "#10100f" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Fegig Technologies" },
    { property: "og:url", content: `${origin}${location.pathname}` },
    { property: "og:image", content: socialImage },
    {
      property: "og:image:alt",
      content: "Fegig Technologies — Software that carries the work.",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: socialImage },
  ];
};

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/assets/fegigtech-logo-mark.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wdth,wght@75..100,400..700&family=Instrument+Serif:ital@0;1&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://giov-client-widget-web.fegigtech.workers.dev/9d5e5b2f-4756-4e55-ad19-a9f77d363eb1" async></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    let frameId: number;
    let lenis: any;
    let active = true;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    import("lenis").then(({ default: Lenis }) => {
      if (!active) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      frameId = requestAnimationFrame(raf);
    });

    return () => {
      active = false;
      if (frameId) cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return <Outlet />;
}
