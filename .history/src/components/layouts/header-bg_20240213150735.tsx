import { useRef } from 'react';

export default function HeaderBg() {
  const bg = useRef(null);

  return (
    <div
      ref={bg}
      className="absolute bottom-0 z-10 size-[2000px] rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 shadow-md"
    />
  );
}
