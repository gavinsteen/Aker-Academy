// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8TeachersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8TeachersvgIcon(props: Icons8TeachersvgIconProps) {
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
          "M10 6a4 4 0 000 8 4 4 0 000-8zm4.463 0a5.968 5.968 0 011.447 3H39v19H16v3h26.5a1.5 1.5 0 100-3H42V7.5A1.5 1.5 0 0040.5 6H14.463zm3.037 5a1.5 1.5 0 100 3h3a1.5 1.5 0 100-3h-3zm8 0a1.5 1.5 0 100 3h9a1.5 1.5 0 100-3h-9zm-14.03 4.984a1.5 1.5 0 00-.32.032C11.1 16.013 11.051 16 11 16H8a3 3 0 00-3 3v21.5a1.5 1.5 0 103 0V31h3v9.5a1.5 1.5 0 103 0V19.773l4.088 1.168a1.5 1.5 0 00.969-.048l5-2a1.5 1.5 0 00-.575-2.9 1.5 1.5 0 00-.539.114l-4.523 1.809-6.508-1.857a1.5 1.5 0 00-.441-.075zM31.5 16a1.5 1.5 0 100 3h3a1.5 1.5 0 100-3h-3z"
        }
      ></path>
    </svg>
  );
}

export default Icons8TeachersvgIcon;
/* prettier-ignore-end */
