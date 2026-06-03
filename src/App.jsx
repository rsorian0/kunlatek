import React, { useEffect, useState } from "react";
import KunlatekLanding from "./KunlatekLanding";
import CookieConsent from "./CookieConsent";
import Privacidade from "./Privacidade";

export default function App() {
  const [path, setPath] = useState(() => {
    // Restaura path após redirect do 404.html do GitHub Pages
    const redirect = sessionStorage.getItem('spa_redirect');
    if (redirect) {
      sessionStorage.removeItem('spa_redirect');
      window.history.replaceState(null, '', redirect);
      return redirect.split('?')[0].replace(/\/$/, '') || '/';
    }
    return window.location.pathname.replace(/\/$/, '') || '/';
  });

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/$/, '') || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (path === '/privacidade') {
    return (
      <>
        <Privacidade />
        <CookieConsent />
      </>
    );
  }

  return (
    <>
      <KunlatekLanding />
      <CookieConsent />
    </>
  );
}
