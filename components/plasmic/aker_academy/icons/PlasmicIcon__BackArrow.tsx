// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackArrowIcon(props: BackArrowIconProps) {
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
          "M20.455 7a1.5 1.5 0 00-1.016.44l-14 14a1.5 1.5 0 000 2.12l14 14A1.5 1.5 0 0022 36.5v-7.645c2.188-.115 5.577-.115 9.04 1.024 4.1 1.349 7.802 3.98 8.99 9.916A1.5 1.5 0 0043 39.5c0-.109-.032-.187-.033-.295h.004c-.002-.007-.007-.012-.008-.02-.103-9.814-4.543-15.758-9.537-18.992-4.4-2.848-8.769-3.611-11.426-3.908V8.5A1.5 1.5 0 0020.455 7zM19 12.121v5.426a1.5 1.5 0 001.389 1.496c2.004.148 7.032.836 11.406 3.668 2.66 1.722 4.998 4.331 6.517 8.045a17.279 17.279 0 00-6.335-3.727c-4.767-1.567-9.534-1.333-11.618-1.138A1.5 1.5 0 0019 27.385v5.494L8.621 22.5 19 12.121z"
        }
      ></path>
    </svg>
  );
}

export default BackArrowIcon;
/* prettier-ignore-end */
