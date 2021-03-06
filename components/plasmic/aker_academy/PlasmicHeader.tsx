// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: Nxyr3sFmDS
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

import { useScreenVariants as useScreenVariantswYcoTSnfjowKk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WYcoTSnfjowKK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: Nxyr3sFmDS/css

import Icons8PlusSvgIcon from "./icons/PlasmicIcon__Icons8PlusSvg"; // plasmic-import: XveKaqTHr/icon
import Icons8NotificationsvgIcon from "./icons/PlasmicIcon__Icons8Notificationsvg"; // plasmic-import: LPB3-ORsE/icon
import Icons8SettingssvgIcon from "./icons/PlasmicIcon__Icons8Settingssvg"; // plasmic-import: 6HtaoiiQa/icon
import Icons8SigninsvgIcon from "./icons/PlasmicIcon__Icons8Signinsvg"; // plasmic-import: f7T7BOUV_/icon

export type PlasmicHeader__VariantMembers = {
  headerSolid: "headerSolid";
  state: "signedIn";
};

export type PlasmicHeader__VariantsArgs = {
  headerSolid?: SingleBooleanChoiceArg<"headerSolid">;
  state?: SingleChoiceArg<"signedIn">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "headerSolid",
  "state"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  headerSolid?: SingleBooleanChoiceArg<"headerSolid">;
  state?: SingleChoiceArg<"signedIn">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswYcoTSnfjowKk()
  });

  return (
    true ? (
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
          sty.root,
          {
            [sty.rootheaderSolid]: hasVariant(
              variants,
              "headerSolid",
              "headerSolid"
            ),
            [sty.rootstate_signedIn]: hasVariant(variants, "state", "signedIn")
          }
        )}
      >
        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__futmr, {
              [sty.freeBoxheaderSolid_state_signedIn__futmr3I7V9922Ef]:
                hasVariant(variants, "headerSolid", "headerSolid") &&
                hasVariant(variants, "state", "signedIn")
            })}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__anr5G,
                {
                  [sty.linkheaderSolid__anr5G3I7V9]: hasVariant(
                    variants,
                    "headerSolid",
                    "headerSolid"
                  )
                }
              )}
              component={Link}
              platform={"nextjs"}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__bgBu)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"64px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/aker_academy/images/akerAcademyLogomark200X190Pxpng.png",
                    fullWidth: 200,
                    fullHeight: 191,
                    aspectRatio: undefined
                  }}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qnZY, {
                    [sty.imgheaderSolid__qnZY3I7V9]: hasVariant(
                      variants,
                      "headerSolid",
                      "headerSolid"
                    )
                  })}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"220px" as const}
                  loading={"lazy" as const}
                  src={
                    hasVariant(variants, "headerSolid", "headerSolid")
                      ? {
                          src: "/plasmic/aker_academy/images/akerAcademyLogo400X65Pxpng.png",
                          fullWidth: 400,
                          fullHeight: 66,
                          aspectRatio: undefined
                        }
                      : hasVariant(globalVariants, "screen", "mobile")
                      ? {
                          src: "/plasmic/aker_academy/images/akerAcademyLogomark200X190Pxpng.png",
                          fullWidth: 200,
                          fullHeight: 191,
                          aspectRatio: undefined
                        }
                      : {
                          src: "/plasmic/aker_academy/images/akerAcademyLogoReverse400X66Pxpng.png",
                          fullWidth: 400,
                          fullHeight: 66,
                          aspectRatio: undefined
                        }
                  }
                />
              ) : null}
            </p.PlasmicLink>

            <div
              className={classNames(projectcss.all, sty.freeBox___94LPk, {
                [sty.freeBoxheaderSolid___94LPk3I7V9]: hasVariant(
                  variants,
                  "headerSolid",
                  "headerSolid"
                ),
                [sty.freeBoxstate_signedIn___94LPk922Ef]: hasVariant(
                  variants,
                  "state",
                  "signedIn"
                )
              })}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___31Ki,
                  {
                    [sty.linkstate_signedIn___31Ki922Ef]: hasVariant(
                      variants,
                      "state",
                      "signedIn"
                    )
                  }
                )}
                component={Link}
                href={
                  hasVariant(variants, "state", "signedIn")
                    ? ("/create" as const)
                    : undefined
                }
                platform={"nextjs"}
              >
                {(hasVariant(variants, "state", "signedIn") ? true : true) ? (
                  <Icons8PlusSvgIcon
                    className={classNames(projectcss.all, sty.svg__dfRow, {
                      [sty.svgheaderSolid_state_signedIn__dfRow3I7V9922Ef]:
                        hasVariant(variants, "state", "signedIn") &&
                        hasVariant(variants, "headerSolid", "headerSolid"),
                      [sty.svgstate_signedIn__dfRow922Ef]: hasVariant(
                        variants,
                        "state",
                        "signedIn"
                      )
                    })}
                    role={"img"}
                  />
                ) : null}
              </p.PlasmicLink>

              {(hasVariant(variants, "state", "signedIn") ? true : false) ? (
                <Icons8NotificationsvgIcon
                  className={classNames(projectcss.all, sty.svg__esoNq, {
                    [sty.svgheaderSolid_state_signedIn__esoNq3I7V9922Ef]:
                      hasVariant(variants, "state", "signedIn") &&
                      hasVariant(variants, "headerSolid", "headerSolid"),
                    [sty.svgstate_signedIn__esoNq922Ef]: hasVariant(
                      variants,
                      "state",
                      "signedIn"
                    )
                  })}
                  role={"img"}
                />
              ) : null}

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___9Ymm9,
                  {
                    [sty.linkstate_signedIn___9Ymm9922Ef]: hasVariant(
                      variants,
                      "state",
                      "signedIn"
                    )
                  }
                )}
                component={Link}
                href={
                  hasVariant(variants, "state", "signedIn")
                    ? ("/account-settings" as const)
                    : undefined
                }
                platform={"nextjs"}
              >
                {(hasVariant(variants, "state", "signedIn") ? true : false) ? (
                  <Icons8SettingssvgIcon
                    className={classNames(projectcss.all, sty.svg__hh7Um, {
                      [sty.svgheaderSolid_state_signedIn__hh7Um3I7V9922Ef]:
                        hasVariant(variants, "state", "signedIn") &&
                        hasVariant(variants, "headerSolid", "headerSolid"),
                      [sty.svgstate_signedIn__hh7Um922Ef]: hasVariant(
                        variants,
                        "state",
                        "signedIn"
                      )
                    })}
                    role={"img"}
                  />
                ) : null}
              </p.PlasmicLink>

              {(hasVariant(variants, "state", "signedIn") ? true : true) ? (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__drjJ, {
                    [sty.imgheaderSolid_state_signedIn__drjJ3I7V9922Ef]:
                      hasVariant(variants, "state", "signedIn") &&
                      hasVariant(variants, "headerSolid", "headerSolid"),
                    [sty.imgstate_signedIn__drjJ922Ef]: hasVariant(
                      variants,
                      "state",
                      "signedIn"
                    )
                  })}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"48px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/aker_academy/images/avatarPlaceholderjpg.jpeg",
                    fullWidth: 96,
                    fullHeight: 96,
                    aspectRatio: undefined
                  }}
                />
              ) : null}
              {(
                hasVariant(variants, "headerSolid", "headerSolid") &&
                hasVariant(variants, "state", "signedIn")
                  ? true
                  : hasVariant(variants, "headerSolid", "headerSolid")
                  ? true
                  : true
              ) ? (
                <Icons8SigninsvgIcon
                  className={classNames(projectcss.all, sty.svg__ttGz6, {
                    [sty.svgheaderSolid__ttGz63I7V9]: hasVariant(
                      variants,
                      "headerSolid",
                      "headerSolid"
                    ),
                    [sty.svgheaderSolid_state_signedIn__ttGz63I7V9922Ef]:
                      hasVariant(variants, "headerSolid", "headerSolid") &&
                      hasVariant(variants, "state", "signedIn")
                  })}
                  role={"img"}
                />
              ) : null}
              {(
                hasVariant(variants, "state", "signedIn")
                  ? true
                  : hasVariant(variants, "headerSolid", "headerSolid")
                  ? true
                  : true
              ) ? (
                <Icons8SigninsvgIcon
                  className={classNames(projectcss.all, sty.svg__bXuTr, {
                    [sty.svgheaderSolid__bXuTr3I7V9]: hasVariant(
                      variants,
                      "headerSolid",
                      "headerSolid"
                    ),
                    [sty.svgstate_signedIn__bXuTr922Ef]: hasVariant(
                      variants,
                      "state",
                      "signedIn"
                    )
                  })}
                  role={"img"}
                />
              ) : null}

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__ryhA,
                  {
                    [sty.linkheaderSolid__ryhA3I7V9]: hasVariant(
                      variants,
                      "headerSolid",
                      "headerSolid"
                    ),
                    [sty.linkheaderSolid_state_signedIn__ryhA3I7V9922Ef]:
                      hasVariant(variants, "headerSolid", "headerSolid") &&
                      hasVariant(variants, "state", "signedIn"),
                    [sty.linkstate_signedIn__ryhA922Ef]: hasVariant(
                      variants,
                      "state",
                      "signedIn"
                    )
                  }
                )}
                component={Link}
                platform={"nextjs"}
              >
                {(hasVariant(variants, "state", "signedIn") ? true : true) ? (
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text,
                      {
                        [sty.textheaderSolid]: hasVariant(
                          variants,
                          "headerSolid",
                          "headerSolid"
                        ),
                        [sty.textstate_signedIn]: hasVariant(
                          variants,
                          "state",
                          "signedIn"
                        )
                      }
                    )}
                  >
                    {"Sign in or register"}
                  </div>
                ) : null}
              </p.PlasmicLink>
            </div>
          </div>
        ) : null}
      </div>
    ) : null
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
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
