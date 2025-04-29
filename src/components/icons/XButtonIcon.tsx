import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function XButton({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 78}
      height={height ?? 78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G filter="url(#filter0_d_1445_46)">
        <Circle cx={39} cy={39} r={29} fill="#D0BFBF" />
      </G>
      <G clipPath="url(#clip0_1445_46)">
        <Path
          d="M48.255 31.485l-6.899 6.898 6.899 6.898-1.74 1.74-6.898-6.898-6.898 6.898-1.74-1.74 6.898-6.898-6.899-6.898 1.74-1.74 6.9 6.898 6.897-6.898 1.74 1.74z"
          fill="#fff"
        />
        <Path
          d="M48.255 31.485l-6.899 6.898 6.899 6.898-1.74 1.74-6.898-6.898-6.898 6.898-1.74-1.74 6.898-6.898-6.899-6.898 1.74-1.74 6.9 6.898 6.897-6.898 1.74 1.74z"
          stroke="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1445_46">
          <Path
            fill="#fff"
            transform="translate(24.809 23.575)"
            d="M0 0H29.617V29.617H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default XButton
