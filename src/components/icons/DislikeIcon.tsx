import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DislikeIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 56}
      height={height ?? 56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <Path
        d="M49.464 8.29L34.537 27.44l19.151 14.926-5.61 7.197-19.15-14.926-14.926 19.15-7.197-5.608 14.926-19.151-19.15-14.926L8.19 6.905 27.34 21.83 42.267 2.68l7.197 5.61z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={3}
      />
    </Svg>
  )
}

export default DislikeIcon
