// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: RpE2xjMN4w
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicActivityLinkBlock.module.css"; // plasmic-import: RpE2xjMN4w/css

export type PlasmicActivityLinkBlock__VariantMembers = {
  project: "project";
};

export type PlasmicActivityLinkBlock__VariantsArgs = {
  project?: SingleBooleanChoiceArg<"project">;
};

type VariantPropType = keyof PlasmicActivityLinkBlock__VariantsArgs;
export const PlasmicActivityLinkBlock__VariantProps =
  new Array<VariantPropType>("project");

export type PlasmicActivityLinkBlock__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicActivityLinkBlock__ArgsType;
export const PlasmicActivityLinkBlock__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicActivityLinkBlock__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultActivityLinkBlockProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  project?: SingleBooleanChoiceArg<"project">;
  className?: string;
}

function PlasmicActivityLinkBlock__RenderFunc(props: {
  variants: PlasmicActivityLinkBlock__VariantsArgs;
  args: PlasmicActivityLinkBlock__ArgsType;
  overrides: PlasmicActivityLinkBlock__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___3Wou)}>
        <div className={classNames(projectcss.all, sty.freeBox__fuOih)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__u6Bqh)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/aker_academy/images/onboardingThumbjpg.jpeg",
                  fullWidth: 800,
                  fullHeight: 400,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.children
          })}

          <div
            className={classNames(projectcss.all, sty.freeBox__rubMb, {
              [sty.freeBoxproject__rubMb6OZV]: hasVariant(
                variants,
                "project",
                "project"
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
                  [sty.textproject]: hasVariant(variants, "project", "project")
                }
              )}
            >
              {hasVariant(variants, "project", "project")
                ? "Project"
                : "Course"}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__rAJl5)}>
          <div className={classNames(projectcss.all, sty.freeBox__mb7Kt)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iOCho
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#757575" }}
                    >
                      {"Step 1:"}
                    </span>
                    <React.Fragment>{" Onboarding session"}</React.Fragment>
                  </React.Fragment>
                </div>
              ),

              value: args.slot,
              className: classNames(sty.slotTargetSlot)
            })}
          </div>
        </div>
      </div>
    </div>
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
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivityLinkBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivityLinkBlock__VariantsArgs;
    args?: PlasmicActivityLinkBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivityLinkBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActivityLinkBlock__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActivityLinkBlock__ArgProps,
      internalVariantPropNames: PlasmicActivityLinkBlock__VariantProps
    });

    return PlasmicActivityLinkBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivityLinkBlock";
  } else {
    func.displayName = `PlasmicActivityLinkBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicActivityLinkBlock = Object.assign(
  // Top-level PlasmicActivityLinkBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicActivityLinkBlock
    internalVariantProps: PlasmicActivityLinkBlock__VariantProps,
    internalArgProps: PlasmicActivityLinkBlock__ArgProps
  }
);

export default PlasmicActivityLinkBlock;
/* prettier-ignore-end */