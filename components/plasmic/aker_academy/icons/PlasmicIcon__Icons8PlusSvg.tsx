// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8PlusSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8PlusSvgIcon(props: Icons8PlusSvgIconProps) {
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
          "M24 4C12.973 4 4 12.973 4 24s8.973 20 20 20 20-8.973 20-20S35.027 4 24 4zm0 3c9.406 0 17 7.594 17 17 0 9.406-7.594 17-17 17-9.406 0-17-7.594-17-17 0-9.406 7.594-17 17-17zm-.023 6.977A1.503 1.503 0 0022.5 15.5v7h-7a1.506 1.506 0 00-1.316.742 1.503 1.503 0 000 1.516c.273.465.777.75 1.316.742h7v7c-.008.54.277 1.043.742 1.316a1.503 1.503 0 001.516 0c.465-.273.75-.777.742-1.316v-7h7a1.506 1.506 0 001.316-.742 1.503 1.503 0 000-1.516A1.506 1.506 0 0032.5 22.5h-7v-7a1.495 1.495 0 00-.441-1.082 1.495 1.495 0 00-1.082-.441zm0 0"
        }
        fillRule={"nonzero"}
        fill={"currentColor"}
        fillOpacity={"1"}
      ></path>
    </svg>
  );
}

export default Icons8PlusSvgIcon;
/* prettier-ignore-end */
