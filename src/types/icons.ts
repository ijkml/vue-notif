type VBox = `${number} ${number} ${number} ${number}`;

export interface IconSVG {
  vbox: VBox
  icon: string
}

export interface IconProps extends IconSVG {
  size?: number | string
}
