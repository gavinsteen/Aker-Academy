// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: PDOKcMTQ57
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
import TextInput from "../../TextInput"; // plasmic-import: HboA_9fv9kn/component
import Button from "../../Button"; // plasmic-import: SpJlpkBmbsK/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicSignInOrRegister.module.css"; // plasmic-import: PDOKcMTQ57/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: cSV9Bou7mox/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: g1ioEUoyUBu/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: UiMMPgDsW7t/icon

export type PlasmicSignInOrRegister__VariantMembers = {};

export type PlasmicSignInOrRegister__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignInOrRegister__VariantsArgs;
export const PlasmicSignInOrRegister__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSignInOrRegister__ArgsType = {};
type ArgPropType = keyof PlasmicSignInOrRegister__ArgsType;
export const PlasmicSignInOrRegister__ArgProps = new Array<ArgPropType>();

export type PlasmicSignInOrRegister__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  containerSignIn?: p.Flex<"div">;
  signInBlock?: p.Flex<"div">;
  signInHeader?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  field?: p.Flex<"div">;
  text?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultSignInOrRegisterProps {}

function PlasmicSignInOrRegister__RenderFunc(props: {
  variants: PlasmicSignInOrRegister__VariantsArgs;
  args: PlasmicSignInOrRegister__ArgsType;
  overrides: PlasmicSignInOrRegister__OverridesType;

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
            state={"signedIn" as const}
          />

          <div
            data-plasmic-name={"containerSignIn"}
            data-plasmic-override={overrides.containerSignIn}
            className={classNames(projectcss.all, sty.containerSignIn)}
          >
            <div
              data-plasmic-name={"signInBlock"}
              data-plasmic-override={overrides.signInBlock}
              className={classNames(projectcss.all, sty.signInBlock)}
            >
              <div
                data-plasmic-name={"signInHeader"}
                data-plasmic-override={overrides.signInHeader}
                className={classNames(projectcss.all, sty.signInHeader)}
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
                  {"Sign in or register"}
                </h1>
              </div>

              <div
                data-plasmic-name={"field"}
                data-plasmic-override={overrides.field}
                className={classNames(projectcss.all, sty.field)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Email"}
                </div>

                <TextInput
                  data-plasmic-name={"textInput"}
                  data-plasmic-override={overrides.textInput}
                  className={classNames("__wab_instance", sty.textInput)}
                  placeholder={"" as const}
                  required={true}
                />
              </div>

              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                {"Next"}
              </Button>
            </div>
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
    "containerSignIn",
    "signInBlock",
    "signInHeader",
    "h1",
    "field",
    "text",
    "textInput",
    "textbox",
    "button"
  ],
  header: ["header"],
  containerSignIn: [
    "containerSignIn",
    "signInBlock",
    "signInHeader",
    "h1",
    "field",
    "text",
    "textInput",
    "textbox",
    "button"
  ],
  signInBlock: [
    "signInBlock",
    "signInHeader",
    "h1",
    "field",
    "text",
    "textInput",
    "textbox",
    "button"
  ],
  signInHeader: ["signInHeader", "h1"],
  h1: ["h1"],
  field: ["field", "text", "textInput", "textbox"],
  text: ["text"],
  textInput: ["textInput", "textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  containerSignIn: "div";
  signInBlock: "div";
  signInHeader: "div";
  h1: "h1";
  field: "div";
  text: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignInOrRegister__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignInOrRegister__VariantsArgs;
    args?: PlasmicSignInOrRegister__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignInOrRegister__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignInOrRegister__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSignInOrRegister__ArgProps,
      internalVariantPropNames: PlasmicSignInOrRegister__VariantProps
    });

    return PlasmicSignInOrRegister__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignInOrRegister";
  } else {
    func.displayName = `PlasmicSignInOrRegister.${nodeName}`;
  }
  return func;
}

export const PlasmicSignInOrRegister = Object.assign(
  // Top-level PlasmicSignInOrRegister renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    containerSignIn: makeNodeComponent("containerSignIn"),
    signInBlock: makeNodeComponent("signInBlock"),
    signInHeader: makeNodeComponent("signInHeader"),
    h1: makeNodeComponent("h1"),
    field: makeNodeComponent("field"),
    text: makeNodeComponent("text"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSignInOrRegister
    internalVariantProps: PlasmicSignInOrRegister__VariantProps,
    internalArgProps: PlasmicSignInOrRegister__ArgProps
  }
);

export default PlasmicSignInOrRegister;
/* prettier-ignore-end */
