import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import { useRouter } from "next/router";
import axios from "axios";
import { IntlProvider } from "react-intl";
import en from "lang/en.json";
import zh from "lang/zh.json";
import vi from "lang/vi.json";
import { LooseObject } from "interfaces";

import "../styles/table.css";

const messages: LooseObject = {
  en,
  zh,
  vi,
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const { query, locale } = router;
  const { accessToken, baseUrl, theme = "dark" } = query || {};
  if (baseUrl) axios.defaults.baseURL = `${baseUrl}`;
  if (accessToken)
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const themeRef = React.useRef<string>(`${theme}`);

  React.useEffect(() => {
    document.body.classList.add(`${themeRef.current}`);
    const link: any = document.getElementById("myTheme");
    link.href = `/theme/${themeRef.current}.css`;

    const handleMessage = (event: MessageEvent) => {
      if ((event.origin + "").includes("origin")) {
        // listening event change theme, language, refresh token here
        console.log("YOLO: ", event.data);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <IntlProvider locale={locale + ""} messages={messages[locale + ""]}>
        <Component {...pageProps} />
      </IntlProvider>
    </CacheProvider>
  );
};

export default MyApp;
