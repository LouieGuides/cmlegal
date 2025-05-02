'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX - 8; // 16px circle → offset by 8
      const y = e.clientY - 8;

      if (cursor) {
        cursor.animate(
          [
            { transform: cursor.style.transform },
            { transform: `translate3d(${x}px, ${y}px, 0)` }
          ],
          {
            duration: 1000, // delay effect
            fill: 'forwards',
            easing: 'ease-out'
          }
        );
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      id="custom-cursor"
      className="hidden sm:block fixed top-0 left-0 w-6 h-6 bg-[#FFEB00] opacity-30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
