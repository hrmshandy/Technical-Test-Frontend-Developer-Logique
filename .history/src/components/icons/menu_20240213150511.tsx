interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#FFF" strokeWidth="2">
          <g>
            <path
              d="M0 .438h14M0 5.688h14m-14 5.25h14"
              transform="translate(-14.000000, -18.000000) translate(15.000000, 19.000000)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
