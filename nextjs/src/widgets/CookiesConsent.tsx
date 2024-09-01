'use client'
import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed lg:mx-20 lg:my-10 bottom-0 left-0 right-0 flex items-center justify-center px-4 py-8 rounded-lg bg-gray-100">
        <span className="text-dark text-base mr-28">
        Мы используем файлы cookie. Продолжая использовать сайт, вы соглашаетесь с этим.
        </span>
        <button className="bg-green-500 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;