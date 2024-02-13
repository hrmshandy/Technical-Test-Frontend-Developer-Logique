'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeaderBg() {
  const bg = useRef(null);
  const [size, setSize] = useState(window.innerWidth);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const width = window.innerWidth * 7;
    setSize(width);
    setLeft(-((width - window.innerWidth) / 2));
    console.log(bg, window.innerWidth);
  }, []);
  return (
    <div
      ref={bg}
      className="absolute bottom-0 z-10 rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 shadow-md"
      style={{ width: size, height: size, left }}
    />
  );
}
