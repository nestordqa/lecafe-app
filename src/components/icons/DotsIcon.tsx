import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DotsIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <Path
        d="M14 6a2 2 0 11-4 0 2 2 0 014 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM14 18a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#000"
      />
    </Svg>
  )
}

export default DotsIcon
