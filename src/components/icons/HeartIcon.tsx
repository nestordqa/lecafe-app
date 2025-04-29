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

function HeartIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 78}
      height={height ?? 78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G filter="url(#filter0_d_1623_89)">
        <Circle cx={39} cy={39} r={29} fill="url(#paint0_linear_1623_89)" />
      </G>
      <Path
        d="M45.343 27.276c4.334 0 7.849 3.537 7.849 7.898C53.192 42.383 39 51.957 39 51.957s-14.191-9.229-14.191-16.783c0-5.43 3.514-7.898 7.847-7.898 2.61 0 4.916 1.289 6.344 3.261 1.427-1.972 3.733-3.26 6.343-3.26z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1623_89"
          x1={41.4747}
          y1={10}
          x2={40.9302}
          y2={68.0188}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF58A4" />
          <Stop offset={1} stopColor="#FF6B86" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default HeartIcon
