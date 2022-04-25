// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8NotificationsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8NotificationsvgIcon(
  props: Icons8NotificationsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
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
          "M23.277 4.016C15.195 4.398 9 11.344 9 19.383v7.265L6.352 31.98c-.008.008-.012.02-.016.028C5.27 34.278 6.996 37 9.504 37H18c0 3.297 2.703 6 6 6s6-2.703 6-6h8.496c2.508 0 4.234-2.723 3.168-4.992l-.012-.028L39 26.648V19c0-8.508-7.137-15.387-15.723-14.98zm.141 2.996A11.977 11.977 0 0136 19v8c0 .23.055.46.156.668l2.793 5.621c.18.387-.027.711-.453.711H9.504c-.426 0-.633-.324-.453-.71l2.793-5.622c.101-.207.156-.438.156-.668v-7.617c0-6.504 4.98-12.067 11.418-12.367zM21 37h6c0 1.676-1.324 3-3 3s-3-1.324-3-3zm0 0"
        }
        fillRule={"nonzero"}
        fill={"currentColor"}
        fillOpacity={"1"}
      ></path>
    </svg>
  );
}

export default Icons8NotificationsvgIcon;
/* prettier-ignore-end */
