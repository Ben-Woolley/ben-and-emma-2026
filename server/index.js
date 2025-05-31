import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { createElement } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid, Typography, Link, createTheme, ThemeProvider, Box as Box$1 } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import TimerIcon from "@mui/icons-material/Timer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CakeIcon from "@mui/icons-material/Cake";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import IcecreamIcon from "@mui/icons-material/Icecream";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import NightlifeIcon from "@mui/icons-material/Nightlife";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return /* @__PURE__ */ jsx(
    Container,
    {
      role: "tabpanel",
      hidden: value !== index,
      id: `simple-tabpanel-${index}`,
      "aria-labelledby": `simple-tab-${index}`,
      ...other,
      children: value === index && /* @__PURE__ */ jsx(Container, { sx: { p: 3 }, children })
    }
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
function HomePage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Box, { sx: { borderBottom: 1, borderColor: "divider", backgroundColor: "white", borderRadius: "25px" }, children: /* @__PURE__ */ jsxs(Tabs, { value, onChange: handleChange, "aria-label": "home tabs", variant: "scrollable", scrollButtons: true, allowScrollButtonsMobile: true, children: [
      /* @__PURE__ */ jsx(Tab, { label: "Schedule", ...a11yProps(0) }),
      /* @__PURE__ */ jsx(Tab, { label: "Getting there", ...a11yProps(1) }),
      /* @__PURE__ */ jsx(Tab, { label: "Honeymoon fund", ...a11yProps(2) }),
      /* @__PURE__ */ jsx(Tab, { label: "Q&A", ...a11yProps(3) }),
      /* @__PURE__ */ jsx(Tab, { label: "RSVP", ...a11yProps(4) })
    ] }) }),
    /* @__PURE__ */ jsx(CustomTabPanel, { value, index: 0, children: /* @__PURE__ */ jsx(Schedule, {}) }),
    /* @__PURE__ */ jsx(CustomTabPanel, { value, index: 1, children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, columns: 2, children: [
      /* @__PURE__ */ jsx(Grid, { size: 1, children: /* @__PURE__ */ jsxs(Typography, { children: [
        /* @__PURE__ */ jsx(Link, { href: "https://dorothyclivegarden.co.uk/", children: "Dorothy Clive Garden" }),
        " lives in the woodland quarter of Staffordshire.",
        /* @__PURE__ */ jsx("br", {}),
        "It's on Nantwich Road,"
      ] }) }),
      /* @__PURE__ */ jsxs(Grid, { size: 1, children: [
        /* @__PURE__ */ jsx("iframe", { width: "100%", height: "300", src: "https://www.openstreetmap.org/export/embed.html?bbox=-2.3700052499771123%2C52.954455501498%2C-2.3663574457168584%2C52.95852090457078&layer=mapnik&marker=52.95648673726256%2C-2.3681812500000206", style: { border: "1px solid black" } }),
        /* @__PURE__ */ jsx(Link, { href: "https://www.openstreetmap.org/?mlat=52.956487&mlon=-2.368181#map=18/52.956487/-2.368181", children: "View Larger Map" }),
        /* @__PURE__ */ jsxs(Typography, { sx: { pt: 2 }, children: [
          "Dorothy Clive Garden",
          /* @__PURE__ */ jsx("br", {}),
          "Willoughbridge",
          /* @__PURE__ */ jsx("br", {}),
          "Market Drayton",
          /* @__PURE__ */ jsx("br", {}),
          "Shropshire",
          /* @__PURE__ */ jsx("br", {}),
          "TF9 4EU",
          /* @__PURE__ */ jsx("br", {}),
          "Phone: 01630 647 237"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CustomTabPanel, { value, index: 2, children: /* @__PURE__ */ jsx(Typography, { children: "Honeymoon fund" }) }),
    /* @__PURE__ */ jsx(CustomTabPanel, { value, index: 3, children: /* @__PURE__ */ jsx(Qa, {}) }),
    /* @__PURE__ */ jsx(CustomTabPanel, { value, index: 4, children: /* @__PURE__ */ jsx(Typography, { children: "RSVP" }) })
  ] });
}
function Qa() {
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(QuestionAndAnswer, { question: "Dress code?", answer: "The groom, groomsmen and bridesmaids will be wearing blue, so please avoid blue and white. The ceremony and the path up to it aren't paved which you may want to bear in mind." }),
    /* @__PURE__ */ jsx(QuestionAndAnswer, { question: "Is the wedding outdoors?", answer: "Hopefully yes! There is a contingency plan in case the weather doesn't like us" }),
    /* @__PURE__ */ jsx(QuestionAndAnswer, { question: "Where do I park?", answer: "Dorothy Clive Garden has on-site parking near the entrance. Accessible parking is up the hill to the right after the entrance booth for guests who have notified that they need it." }),
    /* @__PURE__ */ jsx(QuestionAndAnswer, { question: "Can I take pictures on the day?", answer: "A photographer and videographer will be there to capture the day. We will enforce a no-phones rule for the ceremony but you are free to take pictures during the reception.", warning: "Note that there will be flash photography." }),
    /* @__PURE__ */ jsx(QuestionAndAnswer, { question: "Can I bring a plus-one?", answer: "Sorry, unless explicitly invited you may not bring an extra guest." }),
    /* @__PURE__ */ jsx(QuestionAndAnswer, { question: "I still have more questions!", answer: "Get in touch with Ben at ben.s.woolley@gmail.com or however else is convenient." })
  ] });
}
function QuestionAndAnswer(props) {
  let warningText = props.warning ? /* @__PURE__ */ jsx(Typography, { variant: "h6", align: "center", children: props.warning }) : null;
  return /* @__PURE__ */ jsxs(Box, { paddingBlockEnd: 3, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h5", align: "center", children: props.question }),
    /* @__PURE__ */ jsx(Typography, { align: "center", children: props.answer }),
    warningText
  ] });
}
function Schedule() {
  return /* @__PURE__ */ jsxs(Timeline, { position: "alternate", children: [
    /* @__PURE__ */ jsx(ScheduleItem, { time: "2:45pm", icon: /* @__PURE__ */ jsx(TimerIcon, {}), children: /* @__PURE__ */ jsx(Typography, { children: "Guest arrival" }) }),
    /* @__PURE__ */ jsx(ScheduleItem, { time: "3:30pm", icon: /* @__PURE__ */ jsx(NotificationsIcon, {}), children: /* @__PURE__ */ jsx(Typography, { children: "Ceremony begins" }) }),
    /* @__PURE__ */ jsxs(ScheduleItem, { time: "4:15pm", icon: /* @__PURE__ */ jsx(PhotoCameraIcon, {}), children: [
      /* @__PURE__ */ jsx(Typography, { children: "Drinks & photos" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "Enjoy a glass of prosecco in the gardens" })
    ] }),
    /* @__PURE__ */ jsxs(ScheduleItem, { time: "5:00pm", icon: /* @__PURE__ */ jsx(IcecreamIcon, {}), children: [
      /* @__PURE__ */ jsx(Typography, { children: "Ice cream time" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "An ice cream cart will be set up near the tea room" })
    ] }),
    /* @__PURE__ */ jsx(ScheduleItem, { time: "5:30pm", icon: /* @__PURE__ */ jsx(EmojiFoodBeverageIcon, {}), children: /* @__PURE__ */ jsx(Typography, { children: "Afternoon tea" }) }),
    /* @__PURE__ */ jsxs(ScheduleItem, { time: "6:00pm", icon: /* @__PURE__ */ jsx(CakeIcon, {}), children: [
      /* @__PURE__ */ jsx(Typography, { children: "Cake cutting" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "Nothing like cake after tea and cake" })
    ] }),
    /* @__PURE__ */ jsxs(ScheduleItem, { time: "6:15pm", icon: /* @__PURE__ */ jsx(NightlifeIcon, {}), children: [
      /* @__PURE__ */ jsx(Typography, { children: "First dance" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "Join us in the tea room!" })
    ] }),
    /* @__PURE__ */ jsxs(ScheduleItem, { time: "7:30pm", icon: /* @__PURE__ */ jsx(LocalPizzaIcon, {}), children: [
      /* @__PURE__ */ jsx(Typography, { children: "Pizza time" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "Jordy's Pizza will be available near the Bryan Mayer Pavilion" })
    ] }),
    /* @__PURE__ */ jsxs(LastScheduleItem, { time: "12:00am", icon: /* @__PURE__ */ jsx(LocalTaxiIcon, {}), children: [
      /* @__PURE__ */ jsx(Typography, { children: "Carriages" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "Music stops at 11:30 & everyone must be gone by midnight" })
    ] })
  ] });
}
function ScheduleItem(props) {
  return /* @__PURE__ */ jsxs(TimelineItem, { children: [
    /* @__PURE__ */ jsx(TimelineOppositeContent, { children: props.time }),
    /* @__PURE__ */ jsxs(TimelineSeparator, { children: [
      /* @__PURE__ */ jsx(TimelineDot, { color: "primary", children: props.icon }),
      /* @__PURE__ */ jsx(TimelineConnector, {})
    ] }),
    /* @__PURE__ */ jsx(TimelineContent, { children: props.children })
  ] });
}
function LastScheduleItem(props) {
  return /* @__PURE__ */ jsxs(TimelineItem, { children: [
    /* @__PURE__ */ jsx(TimelineOppositeContent, { children: props.time }),
    /* @__PURE__ */ jsx(TimelineSeparator, { children: /* @__PURE__ */ jsx(TimelineDot, { color: "primary", children: props.icon }) }),
    /* @__PURE__ */ jsx(TimelineContent, { children: props.children })
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#304a8a"
    }
  },
  typography: {
    fontFamily: "Cormorant Garamond Variable",
    fontSize: 18,
    allVariants: {
      color: "#304a8a"
    },
    fontWeightRegular: 500
  }
});
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(ThemeProvider, {
    theme,
    children: /* @__PURE__ */ jsxs(Container, {
      maxWidth: false,
      disableGutters: true,
      children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(HomePage, {})]
    })
  });
});
function Header() {
  return /* @__PURE__ */ jsx(Box$1, {
    children: /* @__PURE__ */ jsxs(Container, {
      maxWidth: false,
      sx: {
        p: 5
      },
      children: [/* @__PURE__ */ jsx(Typography, {
        fontFamily: "Petit Formal Script",
        variant: "h4",
        align: "center",
        children: "The wedding of"
      }), /* @__PURE__ */ jsxs(Grid, {
        container: true,
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: 2,
        spacing: 2,
        children: [/* @__PURE__ */ jsx(Typography, {
          variant: "h1",
          align: "center",
          children: "Ben"
        }), /* @__PURE__ */ jsx(Typography, {
          fontFamily: "Petit Formal Script",
          variant: "h5",
          children: " and "
        }), /* @__PURE__ */ jsx(Typography, {
          letterSpacing: 2,
          variant: "h1",
          align: "center",
          children: "Emma"
        })]
      }), /* @__PURE__ */ jsx(Typography, {
        fontWeight: "bold",
        variant: "h5",
        align: "center",
        children: "Saturday 30th May 2026"
      }), /* @__PURE__ */ jsx(Typography, {
        variant: "h5",
        align: "center",
        children: "Dorothy Clive Garden, TF9 4EU"
      })]
    })
  });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CA_1DeYg.js", "imports": ["/assets/chunk-DQRVZFIR-CeoZw4PJ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-6lqIGF1k.js", "imports": ["/assets/chunk-DQRVZFIR-CeoZw4PJ.js", "/assets/with-props-D67wtf1_.js"], "css": ["/assets/root-8q2trw5v.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Hp9pO2vd.js", "imports": ["/assets/with-props-D67wtf1_.js", "/assets/chunk-DQRVZFIR-CeoZw4PJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-ce59cfac.js", "version": "ce59cfac", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
