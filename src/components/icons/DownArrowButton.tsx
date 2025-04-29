import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DownArrowButton({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 64}
      height={height ?? 64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G filter="url(#filter0_d_1445_450)">
        <Circle cx={32} cy={32} r={22} fill="url(#paint0_linear_1445_450)" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.293 27.293l1.414 1.414L32 37.414l-8.707-8.707 1.414-1.414L32 34.586l7.293-7.293z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1445_450"
          x1={33.8773}
          y1={10}
          x2={33.4643}
          y2={54.0143}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF58A4" />
          <Stop offset={1} stopColor="#FF6B86" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default DownArrowButton
