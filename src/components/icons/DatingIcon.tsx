import { IconProps } from "@/types/common"
import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function DatingIcon({ width, height, otherProps }: IconProps) {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 32}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <Path
        d="M12 32l-5-7c1.633.389 3.048.778 5 .778 1.953 0 3.369-.39 5-.778l-5 7z"
        fill="url(#paint0_linear_4538_3316)"
      />
      <Circle cx={12} cy={12} r={12} fill="url(#paint1_linear_4538_3316)" />
      <Path
        d="M14.235 9C15.762 9 17 10.146 17 11.56c0 2.337-5 5.44-5 5.44s-5-2.992-5-5.44C7 9.8 8.238 9 9.765 9c.92 0 1.732.418 2.235 1.057A2.834 2.834 0 0114.235 9z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4538_3316"
          x1={11.5733}
          y1={32}
          x2={11.6193}
          y2={24.9974}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF58A4" />
          <Stop offset={1} stopColor="#FF6B86" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_4538_3316"
          x1={12.032}
          y1={28.3744}
          x2={12.5598}
          y2={0.477085}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.0426589} stopColor="#FF6B86" />
          <Stop offset={0.979167} stopColor="#FFB03A" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default DatingIcon
