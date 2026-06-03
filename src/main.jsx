import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import KunlatekLanding from "./KunlatekLanding";
import CookieConsent from "./CookieConsent";
import Privacidade from "./Privacidade";

const Home = () => (
  <>
    <KunlatekLanding />
    <CookieConsent />
  </>
);

const PrivacidadePage = () => (
  <>
    <Privacidade />
    <CookieConsent />
  </>
);

export const createRoot = ViteReactSSG({
  routes: [
    { path: "/", Component: Home },
    { path: "/privacidade", Component: PrivacidadePage },
  ],
});
