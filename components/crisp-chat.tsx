'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: any;
    CRISP_WEBSITE_ID: string;
  }
}

export const CrispChat = () => {
  useEffect(() => {
    // Initialize Crisp chat with the provided ID
    window.CRISP_WEBSITE_ID = "17146b8e-0da6-4f2f-adb0-6fef0ad7889d";

    // Load Crisp script
    (function() {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return null;
};

export default CrispChat; 