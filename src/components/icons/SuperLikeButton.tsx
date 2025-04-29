import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SuperLikeButton({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 78}
      height={height ?? 78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G filter="url(#filter0_d_1605_8496)">
        <Circle cx={39} cy={39} r={29} fill="#fff" />
      </G>
      <Path
        d="M45.343 27.277c4.334 0 7.849 3.536 7.849 7.898C53.192 42.383 39 51.957 39 51.957s-14.191-9.229-14.191-16.783c0-5.43 3.514-7.897 7.847-7.897 2.61 0 4.916 1.288 6.344 3.26 1.427-1.972 3.733-3.26 6.343-3.26z"
        fill="#FF6B86"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SuperLikeButton
