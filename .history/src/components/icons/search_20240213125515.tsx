interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g stroke="#FFF" stroke-width="2">
          <g>
            <path
              d="M14 14L9.333 9.333m1.556-3.889c0 3.007-2.438 5.445-5.445 5.445C2.438 10.889 0 8.45 0 5.444 0 2.438 2.438 0 5.444 0c3.007 0 5.445 2.438 5.445 5.444z"
              transform="translate(-310.000000, -17.000000) translate(311.000000, 18.000000)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
