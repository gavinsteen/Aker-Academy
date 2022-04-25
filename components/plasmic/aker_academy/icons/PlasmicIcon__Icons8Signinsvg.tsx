// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8SigninsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8SigninsvgIcon(props: Icons8SigninsvgIconProps) {
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
          "M23.998 3.979a1.5 1.5 0 00-1.478 1.519l-.018 20.383-3.441-3.442a1.5 1.5 0 00-1.077-.455 1.5 1.5 0 00-1.045 2.577l6 6a1.5 1.5 0 002.122 0l6-6a1.5 1.5 0 10-2.122-2.122l-3.437 3.438.018-20.375a1.5 1.5 0 00-1.522-1.523zm-6.482 1.187a1.5 1.5 0 00-.543.104C9.389 8.116 4 15.44 4 24c0 11.028 8.972 20 20 20s20-8.972 20-20c0-8.56-5.389-15.885-12.973-18.73a1.5 1.5 0 10-1.054 2.808C36.41 10.494 41 16.7 41 24c0 9.406-7.594 17-17 17-9.406 0-17-7.594-17-17 0-7.3 4.589-13.505 11.027-15.922a1.5 1.5 0 00-.511-2.912z"
        }
      ></path>
    </svg>
  );
}

export default Icons8SigninsvgIcon;
/* prettier-ignore-end */
