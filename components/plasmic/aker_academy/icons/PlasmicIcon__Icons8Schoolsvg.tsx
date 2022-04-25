// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8SchoolsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8SchoolsvgIcon(props: Icons8SchoolsvgIconProps) {
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
          "M23.959 2a1.5 1.5 0 00-.504.104l-20.5 8a1.5 1.5 0 101.09 2.792L24 5.11l19.955 7.787a1.5 1.5 0 101.09-2.792l-20.5-8A1.5 1.5 0 0023.959 2zM9.5 15C7.585 15 6 16.585 6 18.5v20C6 40.415 7.585 42 9.5 42h11.064A3.959 3.959 0 0024 44a3.959 3.959 0 003.436-2H38.5c1.915 0 3.5-1.585 3.5-3.5v-20c0-1.915-1.585-3.5-3.5-3.5H28c-1.742 0-3.236.878-4.246 2.156C22.562 15.853 20.89 15 19 15H9.5zm0 3H19c1.932 0 3.5 1.568 3.5 3.5V39h-13a.478.478 0 01-.5-.5v-20c0-.295.205-.5.5-.5zM28 18h10.5c.295 0 .5.205.5.5v20c0 .295-.205.5-.5.5h-13V20.5c0-1.398 1.102-2.5 2.5-2.5z"
        }
      ></path>
    </svg>
  );
}

export default Icons8SchoolsvgIcon;
/* prettier-ignore-end */
