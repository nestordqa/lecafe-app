import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
        width={width ?? 63}
        height={height ?? 44}
        viewBox="0 0 63 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.638 30.988l33.538-27.39 4.153 5.117-38.642 31.558L3.928 19.624l5.104-4.168 12.606 15.532z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={5}
      />
    </Svg>
  )
}

export default CheckIcon
