import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 20}
      height={height ?? 14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12v2H8v-2h12zM20 6v2H0V6h20zM12 0v2H0V0h12z"
        fill="#fff"
      />
    </Svg>
  )
}

export default MenuIcon
