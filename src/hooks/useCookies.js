import { useState, useEffect } from "react";

/*this hook will be used to fetch cookies*/
export const useCookies = (cookieName) => {
  const [cookie, setCookie] = useState(null);
  useEffect(() => {
    if (!document.cookie) {
      console.log(document.cookie);
      return null;
    }
    const trimmedCookie = document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((c) => c.startsWith(cookieName + "="));
    if (trimmedCookie.length === 0) {
      return null;
    }
    setCookie(prevCookie => decodeURIComponent(trimmedCookie[0].split("=")[1]));
  }, [cookieName]);
  return cookie;
};
