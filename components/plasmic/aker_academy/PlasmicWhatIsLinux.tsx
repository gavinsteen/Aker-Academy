// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: weQUZvpaVUY
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
import BackLink from "../../BackLink"; // plasmic-import: 7EPh6ElWir/component
import Checkbox from "../../Checkbox"; // plasmic-import: R2bezIVKDQK/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicWhatIsLinux.module.css"; // plasmic-import: weQUZvpaVUY/css

import BackArrowIcon from "./icons/PlasmicIcon__BackArrow"; // plasmic-import: 3XRP6YsMa/icon

export type PlasmicWhatIsLinux__VariantMembers = {};

export type PlasmicWhatIsLinux__VariantsArgs = {};
type VariantPropType = keyof PlasmicWhatIsLinux__VariantsArgs;
export const PlasmicWhatIsLinux__VariantProps = new Array<VariantPropType>();

export type PlasmicWhatIsLinux__ArgsType = {};
type ArgPropType = keyof PlasmicWhatIsLinux__ArgsType;
export const PlasmicWhatIsLinux__ArgProps = new Array<ArgPropType>();

export type PlasmicWhatIsLinux__OverridesType = {
  root?: p.Flex<"div">;
  sectionHero?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  backLink?: p.Flex<typeof BackLink>;
  svg?: p.Flex<"svg">;
  h1?: p.Flex<"h1">;
  sectionBody?: p.Flex<"div">;
  unitVideoPlayer?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  checkbox?: p.Flex<typeof Checkbox>;
  text?: p.Flex<"div">;
};

export interface DefaultWhatIsLinuxProps {}

function PlasmicWhatIsLinux__RenderFunc(props: {
  variants: PlasmicWhatIsLinux__VariantsArgs;
  args: PlasmicWhatIsLinux__ArgsType;
  overrides: PlasmicWhatIsLinux__OverridesType;

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
          <div
            data-plasmic-name={"sectionHero"}
            data-plasmic-override={overrides.sectionHero}
            className={classNames(projectcss.all, sty.sectionHero)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
              headerSolid={true}
            />

            <div className={classNames(projectcss.all, sty.freeBox__qf57N)}>
              <div className={classNames(projectcss.all, sty.freeBox__u8V2Z)}>
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                  component={Link}
                  href={"/step-2-linux-administration-lessons-1-2" as const}
                  platform={"nextjs"}
                >
                  <BackLink
                    data-plasmic-name={"backLink"}
                    data-plasmic-override={overrides.backLink}
                    arrowBack={
                      <BackArrowIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.backLink)}
                  />
                </p.PlasmicLink>

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
                  {"What is Linux?"}
                </h1>
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"sectionBody"}
            data-plasmic-override={overrides.sectionBody}
            className={classNames(projectcss.all, sty.sectionBody)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__xJcHc)}>
              <div
                data-plasmic-name={"unitVideoPlayer"}
                data-plasmic-override={overrides.unitVideoPlayer}
                className={classNames(projectcss.all, sty.unitVideoPlayer)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__j292)}>
                  {true ? (
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"96px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/aker_academy/images/icons8CircledPlay144Svg.svg",
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />
                  ) : null}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__v8A8N)}>
                <Checkbox
                  data-plasmic-name={"checkbox"}
                  data-plasmic-override={overrides.checkbox}
                  className={classNames("__wab_instance", sty.checkbox)}
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
                    {"I have completed this unit"}
                  </div>
                </Checkbox>
              </div>
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
    "sectionHero",
    "header",
    "link",
    "backLink",
    "svg",
    "h1",
    "sectionBody",
    "unitVideoPlayer",
    "img",
    "checkbox",
    "text"
  ],
  sectionHero: ["sectionHero", "header", "link", "backLink", "svg", "h1"],
  header: ["header"],
  link: ["link", "backLink", "svg"],
  backLink: ["backLink", "svg"],
  svg: ["svg"],
  h1: ["h1"],
  sectionBody: ["sectionBody", "unitVideoPlayer", "img", "checkbox", "text"],
  unitVideoPlayer: ["unitVideoPlayer", "img"],
  img: ["img"],
  checkbox: ["checkbox", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHero: "div";
  header: typeof Header;
  link: "a";
  backLink: typeof BackLink;
  svg: "svg";
  h1: "h1";
  sectionBody: "div";
  unitVideoPlayer: "div";
  img: typeof p.PlasmicImg;
  checkbox: typeof Checkbox;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWhatIsLinux__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhatIsLinux__VariantsArgs;
    args?: PlasmicWhatIsLinux__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWhatIsLinux__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWhatIsLinux__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicWhatIsLinux__ArgProps,
      internalVariantPropNames: PlasmicWhatIsLinux__VariantProps
    });

    return PlasmicWhatIsLinux__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhatIsLinux";
  } else {
    func.displayName = `PlasmicWhatIsLinux.${nodeName}`;
  }
  return func;
}

export const PlasmicWhatIsLinux = Object.assign(
  // Top-level PlasmicWhatIsLinux renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHero: makeNodeComponent("sectionHero"),
    header: makeNodeComponent("header"),
    link: makeNodeComponent("link"),
    backLink: makeNodeComponent("backLink"),
    svg: makeNodeComponent("svg"),
    h1: makeNodeComponent("h1"),
    sectionBody: makeNodeComponent("sectionBody"),
    unitVideoPlayer: makeNodeComponent("unitVideoPlayer"),
    img: makeNodeComponent("img"),
    checkbox: makeNodeComponent("checkbox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicWhatIsLinux
    internalVariantProps: PlasmicWhatIsLinux__VariantProps,
    internalArgProps: PlasmicWhatIsLinux__ArgProps
  }
);

export default PlasmicWhatIsLinux;
/* prettier-ignore-end */
