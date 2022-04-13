// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: OGBnjhx9vmv
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
import UnitLink from "../../UnitLink"; // plasmic-import: Bq5HbP3pCG/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicModuleBlock.module.css"; // plasmic-import: OGBnjhx9vmv/css

export type PlasmicModuleBlock__VariantMembers = {
  enrolled: "enrolled";
};

export type PlasmicModuleBlock__VariantsArgs = {
  enrolled?: SingleBooleanChoiceArg<"enrolled">;
};

type VariantPropType = keyof PlasmicModuleBlock__VariantsArgs;
export const PlasmicModuleBlock__VariantProps = new Array<VariantPropType>(
  "enrolled"
);

export type PlasmicModuleBlock__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicModuleBlock__ArgsType;
export const PlasmicModuleBlock__ArgProps = new Array<ArgPropType>("children");

export type PlasmicModuleBlock__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultModuleBlockProps {
  children?: React.ReactNode;
  enrolled?: SingleBooleanChoiceArg<"enrolled">;
  className?: string;
}

function PlasmicModuleBlock__RenderFunc(props: {
  variants: PlasmicModuleBlock__VariantsArgs;
  args: PlasmicModuleBlock__ArgsType;
  overrides: PlasmicModuleBlock__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__vt8RW)}>
        <div className={classNames(projectcss.all, sty.freeBox__poyn9)}>
          <div className={classNames(projectcss.all, sty.freeBox__zWuZf)}>
            {p.renderPlasmicSlot({
              defaultContents: "Module 1: Set up your environment",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>
      </div>

      <UnitLink
        className={classNames("__wab_instance", sty.unitLink___0Uz2, {
          [sty.unitLinkenrolled___0Uz20M9SR]: hasVariant(
            variants,
            "enrolled",
            "enrolled"
          )
        })}
        enrolled={
          hasVariant(variants, "enrolled", "enrolled") ? true : undefined
        }
      >
        {"8:26 min"}
      </UnitLink>

      <UnitLink
        className={classNames("__wab_instance", sty.unitLink__nz414, {
          [sty.unitLinkenrolled__nz4140M9SR]: hasVariant(
            variants,
            "enrolled",
            "enrolled"
          )
        })}
        enrolled={
          hasVariant(variants, "enrolled", "enrolled") ? true : undefined
        }
      />

      <UnitLink
        className={classNames("__wab_instance", sty.unitLink__m28Sb, {
          [sty.unitLinkenrolled__m28Sb0M9SR]: hasVariant(
            variants,
            "enrolled",
            "enrolled"
          )
        })}
        enrolled={
          hasVariant(variants, "enrolled", "enrolled") ? true : undefined
        }
      >
        {"11:58 min"}
      </UnitLink>

      <UnitLink
        className={classNames("__wab_instance", sty.unitLink__at5Rq, {
          [sty.unitLinkenrolled__at5Rq0M9SR]: hasVariant(
            variants,
            "enrolled",
            "enrolled"
          )
        })}
        enrolled={
          hasVariant(variants, "enrolled", "enrolled") ? true : undefined
        }
      >
        {"12:00 min"}
      </UnitLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModuleBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModuleBlock__VariantsArgs;
    args?: PlasmicModuleBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModuleBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModuleBlock__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicModuleBlock__ArgProps,
      internalVariantPropNames: PlasmicModuleBlock__VariantProps
    });

    return PlasmicModuleBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModuleBlock";
  } else {
    func.displayName = `PlasmicModuleBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicModuleBlock = Object.assign(
  // Top-level PlasmicModuleBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicModuleBlock
    internalVariantProps: PlasmicModuleBlock__VariantProps,
    internalArgProps: PlasmicModuleBlock__ArgProps
  }
);

export default PlasmicModuleBlock;
/* prettier-ignore-end */
