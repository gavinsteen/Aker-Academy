// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8RightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8RightsvgIcon(props: Icons8RightsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.484 8.984a1.5 1.5 0 00-1.045 2.577L36.88 23H7.5a1.5 1.5 0 100 3h29.379l-11.44 11.44a1.5 1.5 0 102.122 2.12l14-14a1.5 1.5 0 000-2.12l-14-14a1.5 1.5 0 00-1.077-.456z"
        }
      ></path>
    </svg>
  );
}

export default Icons8RightsvgIcon;
/* prettier-ignore-end */
