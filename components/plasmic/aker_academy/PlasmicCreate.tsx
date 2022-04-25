// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: vzKKhohT3V
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
import Header from "../../Header"; // plasmic-import: Nxyr3sFmDS/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicCreate.module.css"; // plasmic-import: vzKKhohT3V/css

import Icons8SchoolsvgIcon from "./icons/PlasmicIcon__Icons8Schoolsvg"; // plasmic-import: OlWsaiaXf/icon
import Icons8TeachersvgIcon from "./icons/PlasmicIcon__Icons8Teachersvg"; // plasmic-import: IoHdNrROb/icon

export type PlasmicCreate__VariantMembers = {};

export type PlasmicCreate__VariantsArgs = {};
type VariantPropType = keyof PlasmicCreate__VariantsArgs;
export const PlasmicCreate__VariantProps = new Array<VariantPropType>();

export type PlasmicCreate__ArgsType = {};
type ArgPropType = keyof PlasmicCreate__ArgsType;
export const PlasmicCreate__ArgProps = new Array<ArgPropType>();

export type PlasmicCreate__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  containerCreate?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  linkCreate?: p.Flex<"a"> & Partial<LinkProps>;
  linkCreate2?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultCreateProps {}

function PlasmicCreate__RenderFunc(props: {
  variants: PlasmicCreate__VariantsArgs;
  args: PlasmicCreate__ArgsType;
  overrides: PlasmicCreate__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            headerSolid={true}
          />

          <div
            data-plasmic-name={"containerCreate"}
            data-plasmic-override={overrides.containerCreate}
            className={classNames(projectcss.all, sty.containerCreate)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Create"}
            </h1>

            <p.PlasmicLink
              data-plasmic-name={"linkCreate"}
              data-plasmic-override={overrides.linkCreate}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.linkCreate
              )}
              component={Link}
              platform={"nextjs"}
            >
              <Icons8SchoolsvgIcon
                className={classNames(projectcss.all, sty.svg__updup)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8YXu6
                )}
              >
                {"Activity"}
              </div>
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"linkCreate2"}
              data-plasmic-override={overrides.linkCreate2}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.linkCreate2
              )}
              component={Link}
              platform={"nextjs"}
            >
              <Icons8TeachersvgIcon
                className={classNames(projectcss.all, sty.svg__t2TU)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cHheY
                )}
              >
                {"Instructor"}
              </div>
            </p.PlasmicLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "containerCreate",
    "h1",
    "linkCreate",
    "linkCreate2"
  ],
  header: ["header"],
  containerCreate: ["containerCreate", "h1", "linkCreate", "linkCreate2"],
  h1: ["h1"],
  linkCreate: ["linkCreate"],
  linkCreate2: ["linkCreate2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  containerCreate: "div";
  h1: "h1";
  linkCreate: "a";
  linkCreate2: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCreate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCreate__VariantsArgs;
    args?: PlasmicCreate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCreate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCreate__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCreate__ArgProps,
      internalVariantPropNames: PlasmicCreate__VariantProps
    });

    return PlasmicCreate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCreate";
  } else {
    func.displayName = `PlasmicCreate.${nodeName}`;
  }
  return func;
}

export const PlasmicCreate = Object.assign(
  // Top-level PlasmicCreate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    containerCreate: makeNodeComponent("containerCreate"),
    h1: makeNodeComponent("h1"),
    linkCreate: makeNodeComponent("linkCreate"),
    linkCreate2: makeNodeComponent("linkCreate2"),

    // Metadata about props expected for PlasmicCreate
    internalVariantProps: PlasmicCreate__VariantProps,
    internalArgProps: PlasmicCreate__ArgProps
  }
);

export default PlasmicCreate;
/* prettier-ignore-end */