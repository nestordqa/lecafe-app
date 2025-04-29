import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LikeButton({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 78}
      height={height ?? 78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G filter="url(#filter0_d_1445_45)">
        <Circle cx={39} cy={39} r={29} fill="#FEB5DB" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.787 42.447l11.468-11.468L50 32.724 36.787 45.937l-7.043-7.043 1.745-1.745 5.298 5.298z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default LikeButton
