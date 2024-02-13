'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeaderBg() {
  const bg = useRef(null);
  const [size, setSize] = useState(window.innerWidth);
  const [left, setLeft] = useState(0);

  const centerTheBackground = () => {
    const width = window.innerWidth * 7;
    setSize(width);
    setLeft(-((width - window.innerWidth) / 2));
  };

  useEffect(() => {
    centerTheBackground();

    window.addEventListener('resize', centerTheBackground);
    return () => {
      window.removeEventListener('resize', centerTheBackground);
    };
  }, []);
  return (
    <div
      ref={bg}
      className="lg:bottom-13 absolute bottom-10 z-10 rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 shadow-md lg:rounded-none"
      style={{ width: size, height: size, left }}
    />
  );
}
