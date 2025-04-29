import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function InfoButton({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 52}
      height={height ?? 52}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G filter="url(#filter0_d_1445_47)">
        <Circle cx={26} cy={26} r={16} fill="#FF6B86" />
      </G>
      <G clipPath="url(#clip0_1445_47)">
        <Path
          d="M25 29h2v2h-2v-2zm0-8h2v6h-2v-6zm.99-5C20.47 16 16 20.48 16 26s4.47 10 9.99 10C31.52 36 36 31.52 36 26s-4.48-10-10.01-10zM26 34c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1445_47">
          <Path fill="#fff" transform="translate(14 14)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default InfoButton
