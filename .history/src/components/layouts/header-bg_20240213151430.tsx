'use client';

import { useEffect, useRef } from 'react';

export default function HeaderBg() {
  const bg = useRef(null);

  useEffect(() => {
    console.log(bg, window.innerWidth);
  }, []);
  return (
    <div
      ref={bg}
      className="absolute bottom-0 z-10 rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 shadow-md"
    />
  );
}
