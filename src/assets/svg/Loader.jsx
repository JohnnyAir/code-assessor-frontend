import React from "react";

function Loader({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={width || "200px"}
      height={height || "200px"}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="75" cy="50" fill="#f8fff5" r="3.31031">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.9166666666666666s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.9166666666666666s"
        ></animate>
      </circle>
      <circle cx="71.65063509461098" cy="62.5" fill="#f8fff5" r="3.97698">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.8333333333333334s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.8333333333333334s"
        ></animate>
      </circle>
      <circle cx="62.5" cy="71.65063509461096" fill="#f8fff5" r="4.64364">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.75s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.75s"
        ></animate>
      </circle>
      <circle cx="50" cy="75" fill="#f8fff5" r="4.68969">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.6666666666666666s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.6666666666666666s"
        ></animate>
      </circle>
      <circle
        cx="37.50000000000001"
        cy="71.65063509461098"
        fill="#f8fff5"
        r="4.02302"
      >
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.5833333333333334s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.5833333333333334s"
        ></animate>
      </circle>
      <circle cx="28.34936490538903" cy="62.5" fill="#f8fff5" r="3.35636">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle cx="25" cy="50" fill="#f8fff5" r="3">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.4166666666666667s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.4166666666666667s"
        ></animate>
      </circle>
      <circle
        cx="28.34936490538903"
        cy="37.50000000000001"
        fill="#f8fff5"
        r="3"
      >
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.3333333333333333s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.3333333333333333s"
        ></animate>
      </circle>
      <circle
        cx="37.499999999999986"
        cy="28.349364905389038"
        fill="#f8fff5"
        r="3"
      >
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.25s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.25s"
        ></animate>
      </circle>
      <circle cx="49.99999999999999" cy="25" fill="#f8fff5" r="3">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.16666666666666666s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.16666666666666666s"
        ></animate>
      </circle>
      <circle cx="62.5" cy="28.349364905389034" fill="#f8fff5" r="3">
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="-0.08333333333333333s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="-0.08333333333333333s"
        ></animate>
      </circle>
      <circle
        cx="71.65063509461096"
        cy="37.499999999999986"
        fill="#f8fff5"
        r="3"
      >
        <animate
          attributeName="r"
          values="3;3;5;3;3"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          values="#f8fff5;#f8fff5;#ffffff;#f8fff5;#f8fff5"
          repeatCount="indefinite"
          times="0;0.1;0.2;0.3;1"
          dur="1s"
          begin="0s"
        ></animate>
      </circle>
    </svg>
  );
}

export default Loader;
