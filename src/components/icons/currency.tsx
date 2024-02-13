interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CurrencyIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#F5B014" strokeWidth="2">
          <g>
            <g>
              <path
                d="M8 4.444c-1.473 0-2.667.796-2.667 1.778S6.527 8 8 8c1.473 0 2.667.796 2.667 1.778S9.473 11.556 8 11.556m0-7.112c.987 0 1.849.358 2.31.89M8 4.443v-.888m0 .888v7.112m0 0v.888m0-.888c-.987 0-1.849-.358-2.31-.89M16 8c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                transform="translate(-271.000000, -249.000000) translate(15.000000, 156.000000) translate(257.000000, 94.000000)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
