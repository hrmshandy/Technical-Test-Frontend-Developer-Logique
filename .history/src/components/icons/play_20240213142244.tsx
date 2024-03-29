interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <defs>
        <filter
          id="v2dinylqja"
          width="152.5%"
          height="152.5%"
          x="-26.3%"
          y="-18.8%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
        <path
          id="0nydk4g5ob"
          d="M16 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667 2.667 8.64 2.667 16 8.64 29.333 16 29.333zm0-24c5.88 0 10.667 4.787 10.667 10.667S21.88 26.667 16 26.667 5.333 21.88 5.333 16 10.12 5.333 16 5.333zM13.333 10v12l8-6-8-6z"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <path
              d="M0 0L32 0 32 32 0 32z"
              transform="translate(-58.000000, -202.000000) translate(60.000000, 202.000000)"
            />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M16 26.667c5.88 0 10.667-4.787 10.667-10.667S21.88 5.333 16 5.333 5.333 10.12 5.333 16 10.12 26.667 16 26.667zM13.333 10l8 6-8 6V10z"
              opacity=".3"
              transform="translate(-58.000000, -202.000000) translate(60.000000, 202.000000)"
            />
            <g
              fill-rule="nonzero"
              transform="translate(-58.000000, -202.000000) translate(60.000000, 202.000000)"
            >
              <use
                fill="#000"
                filter="url(#v2dinylqja)"
                xlink:href="#0nydk4g5ob"
              />
              <use fill="#FFF" xlink:href="#0nydk4g5ob" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
