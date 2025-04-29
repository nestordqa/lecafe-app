import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function XIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <G clipPath="url(#clip0_1482_357)">
        <Path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          fill="#221F30"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1482_357">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default XIcon
