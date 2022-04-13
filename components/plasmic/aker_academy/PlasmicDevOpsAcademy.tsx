// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: SLoEy8U2Bb
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
import PageHeading from "../../PageHeading"; // plasmic-import: XPfe-LECZQ/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import ActivityLinkBlock from "../../ActivityLinkBlock"; // plasmic-import: RpE2xjMN4w/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicDevOpsAcademy.module.css"; // plasmic-import: SLoEy8U2Bb/css

export type PlasmicDevOpsAcademy__VariantMembers = {};

export type PlasmicDevOpsAcademy__VariantsArgs = {};
type VariantPropType = keyof PlasmicDevOpsAcademy__VariantsArgs;
export const PlasmicDevOpsAcademy__VariantProps = new Array<VariantPropType>();

export type PlasmicDevOpsAcademy__ArgsType = {};
type ArgPropType = keyof PlasmicDevOpsAcademy__ArgsType;
export const PlasmicDevOpsAcademy__ArgProps = new Array<ArgPropType>();

export type PlasmicDevOpsAcademy__OverridesType = {
  root?: p.Flex<"div">;
  sectionHero?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageHeading?: p.Flex<typeof PageHeading>;
  sectionBody?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  reveal?: p.Flex<typeof Reveal>;
};

export interface DefaultDevOpsAcademyProps {}

function PlasmicDevOpsAcademy__RenderFunc(props: {
  variants: PlasmicDevOpsAcademy__VariantsArgs;
  args: PlasmicDevOpsAcademy__ArgsType;
  overrides: PlasmicDevOpsAcademy__OverridesType;

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
          {true ? (
            <div
              data-plasmic-name={"sectionHero"}
              data-plasmic-override={overrides.sectionHero}
              className={classNames(projectcss.all, sty.sectionHero)}
            >
              {true ? (
                <Header
                  data-plasmic-name={"header"}
                  data-plasmic-override={overrides.header}
                  className={classNames("__wab_instance", sty.header)}
                />
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__qmOf)}>
                  <PageHeading
                    data-plasmic-name={"pageHeading"}
                    data-plasmic-override={overrides.pageHeading}
                    className={classNames("__wab_instance", sty.pageHeading)}
                    slot={
                      true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oISsa
                          )}
                        >
                          {
                            "Become a DevOps Engineer in 3 months through our fast track Masterclass training programme."
                          }
                        </div>
                      ) : null
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__n86
                      )}
                    >
                      {"DevOps Academy"}
                    </div>
                  </PageHeading>
                </div>
              ) : null}
            </div>
          ) : null}

          <div
            data-plasmic-name={"sectionBody"}
            data-plasmic-override={overrides.sectionBody}
            className={classNames(projectcss.all, sty.sectionBody)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__s4TnK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fMGgv
                )}
              >
                {
                  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\n\nVestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta."
                }
              </div>

              <h2
                data-plasmic-name={"h2"}
                data-plasmic-override={overrides.h2}
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2
                )}
              >
                {"Learning activities"}
              </h2>

              <Reveal
                data-plasmic-name={"reveal"}
                data-plasmic-override={overrides.reveal}
                className={classNames("__wab_instance", sty.reveal)}
                reverse={false}
                triggerOnce={true}
              >
                <div className={classNames(projectcss.all, sty.freeBox__moSt)}>
                  <ActivityLinkBlock
                    className={classNames(
                      "__wab_instance",
                      sty.activityLinkBlock__cShLn
                    )}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__ohR7)}
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

                    <div
                      className={classNames(projectcss.all, sty.freeBox__epEn)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ourV
                        )}
                      >
                        {"Course"}
                      </div>
                    </div>
                  </ActivityLinkBlock>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__wdWr7
                    )}
                    component={Link}
                    href={"/step-2-linux-administration-lessons-1-2" as const}
                    platform={"nextjs"}
                  >
                    <ActivityLinkBlock
                      className={classNames(
                        "__wab_instance",
                        sty.activityLinkBlock__clKpA
                      )}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ivil
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#757575" }}
                            >
                              {"Step 2:"}
                            </span>
                            <React.Fragment>
                              {" Linux administration (lessons 1-2)"}
                            </React.Fragment>
                          </React.Fragment>
                        </div>
                      }
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__zP8K)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/aker_academy/images/linux1Jpg.jpeg",
                          fullWidth: 800,
                          fullHeight: 400,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__pObG0
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xinnD
                          )}
                        >
                          {"Course"}
                        </div>
                      </div>
                    </ActivityLinkBlock>
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__gPyUx
                    )}
                    component={Link}
                    href={"/step-2-linux-administration-lessons-1-3" as const}
                    platform={"nextjs"}
                  >
                    <ActivityLinkBlock
                      className={classNames(
                        "__wab_instance",
                        sty.activityLinkBlock__bUake
                      )}
                      project={true}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pxiRm
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#757575" }}
                            >
                              {"Step 3:"}
                            </span>
                            <React.Fragment>
                              {" Project 1 - LAMP stack implementation"}
                            </React.Fragment>
                          </React.Fragment>
                        </div>
                      }
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___8ZcOn)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/aker_academy/images/lampStackThumbjpg.jpeg",
                          fullWidth: 800,
                          fullHeight: 400,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__uhWzE
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__egfje
                          )}
                        >
                          {"Course"}
                        </div>
                      </div>
                    </ActivityLinkBlock>
                  </p.PlasmicLink>

                  <ActivityLinkBlock
                    className={classNames(
                      "__wab_instance",
                      sty.activityLinkBlock___2BZB
                    )}
                    project={true}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__f1285
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#757575" }}
                          >
                            {"Step 4:"}
                          </span>
                          <React.Fragment>
                            {" Project 2 - LEMP stack implementation"}
                          </React.Fragment>
                        </React.Fragment>
                      </div>
                    }
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__y4Yir)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/aker_academy/images/lempStackThumbjpg.jpeg",
                        fullWidth: 800,
                        fullHeight: 400,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__uhWzE)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__egfje
                        )}
                      >
                        {"Course"}
                      </div>
                    </div>
                  </ActivityLinkBlock>

                  <ActivityLinkBlock
                    className={classNames(
                      "__wab_instance",
                      sty.activityLinkBlock__rh06F
                    )}
                    project={true}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__p7HuW
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#757575" }}
                          >
                            {"Step 5:"}
                          </span>
                          <React.Fragment>
                            {" Project 3 - MERN stack implementation"}
                          </React.Fragment>
                        </React.Fragment>
                      </div>
                    }
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__cnGv)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/aker_academy/images/mernStackThumbjpg.jpeg",
                        fullWidth: 800,
                        fullHeight: 400,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__uhWzE)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__egfje
                        )}
                      >
                        {"Course"}
                      </div>
                    </div>
                  </ActivityLinkBlock>

                  <ActivityLinkBlock
                    className={classNames(
                      "__wab_instance",
                      sty.activityLinkBlock__d4XBr
                    )}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__l1R6T
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#757575" }}
                          >
                            {"Step 6:"}
                          </span>
                          <React.Fragment>
                            {" Linux administration (lessons 3 -4)"}
                          </React.Fragment>
                        </React.Fragment>
                      </div>
                    }
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__lG3Cu)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/aker_academy/images/linux2Jpg.jpeg",
                        fullWidth: 800,
                        fullHeight: 400,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__uhWzE)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__egfje
                        )}
                      >
                        {"Course"}
                      </div>
                    </div>
                  </ActivityLinkBlock>
                </div>
              </Reveal>
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
    "pageHeading",
    "sectionBody",
    "h2",
    "reveal"
  ],
  sectionHero: ["sectionHero", "header", "pageHeading"],
  header: ["header"],
  pageHeading: ["pageHeading"],
  sectionBody: ["sectionBody", "h2", "reveal"],
  h2: ["h2"],
  reveal: ["reveal"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHero: "div";
  header: typeof Header;
  pageHeading: typeof PageHeading;
  sectionBody: "div";
  h2: "h2";
  reveal: typeof Reveal;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDevOpsAcademy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDevOpsAcademy__VariantsArgs;
    args?: PlasmicDevOpsAcademy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDevOpsAcademy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDevOpsAcademy__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDevOpsAcademy__ArgProps,
      internalVariantPropNames: PlasmicDevOpsAcademy__VariantProps
    });

    return PlasmicDevOpsAcademy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDevOpsAcademy";
  } else {
    func.displayName = `PlasmicDevOpsAcademy.${nodeName}`;
  }
  return func;
}

export const PlasmicDevOpsAcademy = Object.assign(
  // Top-level PlasmicDevOpsAcademy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHero: makeNodeComponent("sectionHero"),
    header: makeNodeComponent("header"),
    pageHeading: makeNodeComponent("pageHeading"),
    sectionBody: makeNodeComponent("sectionBody"),
    h2: makeNodeComponent("h2"),
    reveal: makeNodeComponent("reveal"),

    // Metadata about props expected for PlasmicDevOpsAcademy
    internalVariantProps: PlasmicDevOpsAcademy__VariantProps,
    internalArgProps: PlasmicDevOpsAcademy__ArgProps
  }
);

export default PlasmicDevOpsAcademy;
/* prettier-ignore-end */