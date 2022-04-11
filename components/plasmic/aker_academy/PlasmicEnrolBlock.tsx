// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: F9ColP2Mm0
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonOutlined from "../../ButtonOutlined"; // plasmic-import: 2KszG0-KPy/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicEnrolBlock.module.css"; // plasmic-import: F9ColP2Mm0/css

export type PlasmicEnrolBlock__VariantMembers = {
  enrolled: "enrolled";
};

export type PlasmicEnrolBlock__VariantsArgs = {
  enrolled?: SingleBooleanChoiceArg<"enrolled">;
};

type VariantPropType = keyof PlasmicEnrolBlock__VariantsArgs;
export const PlasmicEnrolBlock__VariantProps = new Array<VariantPropType>(
  "enrolled"
);

export type PlasmicEnrolBlock__ArgsType = {};
type ArgPropType = keyof PlasmicEnrolBlock__ArgsType;
export const PlasmicEnrolBlock__ArgProps = new Array<ArgPropType>();

export type PlasmicEnrolBlock__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  text?: p.Flex<"div">;
};

export interface DefaultEnrolBlockProps {
  enrolled?: SingleBooleanChoiceArg<"enrolled">;
  className?: string;
}

function PlasmicEnrolBlock__RenderFunc(props: {
  variants: PlasmicEnrolBlock__VariantsArgs;
  args: PlasmicEnrolBlock__ArgsType;
  overrides: PlasmicEnrolBlock__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootenrolled]: hasVariant(variants, "enrolled", "enrolled") }
      )}
      component={Link}
      platform={"nextjs"}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__vbIq3, {
          [sty.freeBoxenrolled__vbIq3GedGq]: hasVariant(
            variants,
            "enrolled",
            "enrolled"
          )
        })}
      >
        {(hasVariant(variants, "enrolled", "enrolled") ? true : true) ? (
          <ButtonOutlined
            className={classNames(
              "__wab_instance",
              sty.buttonOutlined___2HlMb,
              {
                [sty.buttonOutlinedenrolled___2HlMbGedGq]: hasVariant(
                  variants,
                  "enrolled",
                  "enrolled"
                )
              }
            )}
          >
            {"Enrol"}
          </ButtonOutlined>
        ) : null}
        {(hasVariant(variants, "enrolled", "enrolled") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___4Qxgy, {
              [sty.freeBoxenrolled___4QxgyGedGq]: hasVariant(
                variants,
                "enrolled",
                "enrolled"
              )
            })}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text,
                {
                  [sty.textenrolled]: hasVariant(
                    variants,
                    "enrolled",
                    "enrolled"
                  )
                }
              )}
            >
              {"You are enrolled"}
            </div>
          </div>
        ) : null}
        {(hasVariant(variants, "enrolled", "enrolled") ? true : true) ? (
          <ButtonOutlined
            className={classNames("__wab_instance", sty.buttonOutlined__goSWd, {
              [sty.buttonOutlinedenrolled__goSWdGedGq]: hasVariant(
                variants,
                "enrolled",
                "enrolled"
              )
            })}
          >
            {"Unenrol"}
          </ButtonOutlined>
        ) : null}
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEnrolBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEnrolBlock__VariantsArgs;
    args?: PlasmicEnrolBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEnrolBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEnrolBlock__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEnrolBlock__ArgProps,
      internalVariantPropNames: PlasmicEnrolBlock__VariantProps
    });

    return PlasmicEnrolBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEnrolBlock";
  } else {
    func.displayName = `PlasmicEnrolBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicEnrolBlock = Object.assign(
  // Top-level PlasmicEnrolBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicEnrolBlock
    internalVariantProps: PlasmicEnrolBlock__VariantProps,
    internalArgProps: PlasmicEnrolBlock__ArgProps
  }
);

export default PlasmicEnrolBlock;
/* prettier-ignore-end */
