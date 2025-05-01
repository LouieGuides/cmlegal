/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';

export default function UnsubscribePage() {
  useEffect(() => {
    let v: any = window;
    let z = 1;

    while (true) {
      let e = v.location.hash;
      if (e) {
        e = e.replace('#', '');

        const script = document.createElement('script');
        script.src = `https://crm.zoho.com/UnsubscribeLink?rid=${e}`;
        document.body.appendChild(script);

        const container = document.createElement('div');
        container.setAttribute('id', 'RGl2RWxl');

        const scriptEl = document.getElementById('U2NyaXB0');
        if (scriptEl && scriptEl.parentElement) {
          scriptEl.parentElement.insertBefore(container, scriptEl.nextElementSibling);
        }

        break;
      }
      v = v.parent;
      z = z + 1;
      if (z > 10) {
        break;
      }
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f4f4f4] text-[#0C0950] px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Unsubscribe</h1>
        <p className="text-lg mb-8">If you're seeing this page, we're processing your request.</p>

        {/* Reference anchor so the script knows where to insert */}
        <div id="U2NyaXB0" />
      </div>
    </>
  );
}
