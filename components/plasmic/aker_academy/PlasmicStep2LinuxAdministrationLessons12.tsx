// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sog8262LcebSfK4tonEqFh
// Component: 8vP09OMQMX
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
import ActivitySubNavigation from "../../ActivitySubNavigation"; // plasmic-import: wjbmsNY1FAt/component
import EnrolBlock from "../../EnrolBlock"; // plasmic-import: F9ColP2Mm0/component
import ModuleBlock from "../../ModuleBlock"; // plasmic-import: OGBnjhx9vmv/component
import UnitLink from "../../UnitLink"; // plasmic-import: Bq5HbP3pCG/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aker_academy.module.css"; // plasmic-import: sog8262LcebSfK4tonEqFh/projectcss
import sty from "./PlasmicStep2LinuxAdministrationLessons12.module.css"; // plasmic-import: 8vP09OMQMX/css

export type PlasmicStep2LinuxAdministrationLessons12__VariantMembers = {
  enrolled: "enrolled";
};

export type PlasmicStep2LinuxAdministrationLessons12__VariantsArgs = {
  enrolled?: SingleBooleanChoiceArg<"enrolled">;
};

type VariantPropType =
  keyof PlasmicStep2LinuxAdministrationLessons12__VariantsArgs;
export const PlasmicStep2LinuxAdministrationLessons12__VariantProps =
  new Array<VariantPropType>("enrolled");

export type PlasmicStep2LinuxAdministrationLessons12__ArgsType = {};
type ArgPropType = keyof PlasmicStep2LinuxAdministrationLessons12__ArgsType;
export const PlasmicStep2LinuxAdministrationLessons12__ArgProps =
  new Array<ArgPropType>();

export type PlasmicStep2LinuxAdministrationLessons12__OverridesType = {
  root?: p.Flex<"div">;
  sectionHero?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageHeading?: p.Flex<typeof PageHeading>;
  activitySubNavigation?: p.Flex<typeof ActivitySubNavigation>;
  sectionBody?: p.Flex<"div">;
  enrolBlock?: p.Flex<typeof EnrolBlock>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultStep2LinuxAdministrationLessons12Props {}

function PlasmicStep2LinuxAdministrationLessons12__RenderFunc(props: {
  variants: PlasmicStep2LinuxAdministrationLessons12__VariantsArgs;
  args: PlasmicStep2LinuxAdministrationLessons12__ArgsType;
  overrides: PlasmicStep2LinuxAdministrationLessons12__OverridesType;

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
            sty.root,
            { [sty.rootenrolled]: hasVariant(variants, "enrolled", "enrolled") }
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
              className={classNames("__wab_instance", sty.header, {
                [sty.headerenrolled]: hasVariant(
                  variants,
                  "enrolled",
                  "enrolled"
                )
              })}
              state={
                hasVariant(variants, "enrolled", "enrolled")
                  ? ("signedIn" as const)
                  : ("signedIn" as const)
              }
            />

            <div className={classNames(projectcss.all, sty.freeBox__mFyTr)}>
              <div className={classNames(projectcss.all, sty.freeBox___46ZZx)}>
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
                          sty.text__fWvGo
                        )}
                      >
                        {"Lessons 1 -2"}
                      </div>
                    ) : null
                  }
                >
                  {"Linux administration"}
                </PageHeading>
              </div>
            </div>
          </div>

          {true ? (
            <ActivitySubNavigation
              data-plasmic-name={"activitySubNavigation"}
              data-plasmic-override={overrides.activitySubNavigation}
              className={classNames(
                "__wab_instance",
                sty.activitySubNavigation
              )}
            />
          ) : null}

          <div
            data-plasmic-name={"sectionBody"}
            data-plasmic-override={overrides.sectionBody}
            className={classNames(projectcss.all, sty.sectionBody)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ofrc)}>
              <EnrolBlock
                data-plasmic-name={"enrolBlock"}
                data-plasmic-override={overrides.enrolBlock}
                className={classNames("__wab_instance", sty.enrolBlock, {
                  [sty.enrolBlockenrolled]: hasVariant(
                    variants,
                    "enrolled",
                    "enrolled"
                  )
                })}
                enrolled={
                  hasVariant(variants, "enrolled", "enrolled")
                    ? true
                    : undefined
                }
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4P33E
                )}
              >
                {
                  "This video is your very first step to getting technically hands-on as a complete beginner. Linux is the most popular operating system. It powers the greatest software programs and websites used by both startups and large enterprises. Understanding Linux is an essential pre-requisite for a career in DevOps or cloud engineering on either AWS, Google Cloud, Azure, Digital Ocean, Ali Baba, or even private cloud platforms."
                }
              </div>

              <ModuleBlock
                className={classNames(
                  "__wab_instance",
                  sty.moduleBlock__wgQ9T,
                  {
                    [sty.moduleBlockenrolled__wgQ9Topxts]: hasVariant(
                      variants,
                      "enrolled",
                      "enrolled"
                    )
                  }
                )}
                enrolled={
                  hasVariant(variants, "enrolled", "enrolled")
                    ? true
                    : undefined
                }
                slot={
                  <React.Fragment>
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link
                      )}
                      component={Link}
                      href={"/step-2-linux-administration-lessons-1-4" as const}
                      platform={"nextjs"}
                    >
                      <UnitLink
                        className={classNames(
                          "__wab_instance",
                          sty.unitLink___8H45T
                        )}
                      >
                        {"8:26 min"}
                      </UnitLink>
                    </p.PlasmicLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__iLvYd
                      )}
                      slot={"History of Linux"}
                    >
                      {"8:00 min"}
                    </UnitLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__bKVs
                      )}
                      slot={"Using EC2 as your virtual server"}
                    >
                      {"11:58 min"}
                    </UnitLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__xHgXm
                      )}
                      slot={"Connecting to EC2 virtual machine in AWS"}
                    >
                      {"12:00 min"}
                    </UnitLink>
                  </React.Fragment>
                }
              >
                {"Module 1: Set up your environment"}
              </ModuleBlock>

              <ModuleBlock
                className={classNames(
                  "__wab_instance",
                  sty.moduleBlock__wLo4H,
                  {
                    [sty.moduleBlockenrolled__wLo4Hopxts]: hasVariant(
                      variants,
                      "enrolled",
                      "enrolled"
                    )
                  }
                )}
                enrolled={
                  hasVariant(variants, "enrolled", "enrolled")
                    ? true
                    : undefined
                }
                slot={
                  <React.Fragment>
                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__suhof
                      )}
                      slot={"Familiarising yourself with Linux terminal"}
                    >
                      {"8:26 min"}
                    </UnitLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__a4VdS
                      )}
                      slot={"Linux Commands | which | info | man | cd | mkdir"}
                    >
                      {"8:26 min"}
                    </UnitLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__jFiCl
                      )}
                      slot={"Linux Command (rmdir | rm | & flags)"}
                    >
                      {"8:26 min"}
                    </UnitLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__hmRfh
                      )}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9ZxMk
                          )}
                        >
                          {"Linux Commands cp | mv"}
                        </div>
                      }
                    >
                      {"8:26 min"}
                    </UnitLink>

                    <UnitLink
                      className={classNames(
                        "__wab_instance",
                        sty.unitLink__rotXr
                      )}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__s35Qy
                          )}
                        >
                          {"Linux Commands (echo | variable ($ sign) )"}
                        </div>
                      }
                    >
                      {"8:26 min"}
                    </UnitLink>
                  </React.Fragment>
                }
              >
                {"Module 2: Basic Linux commands"}
              </ModuleBlock>
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
    "activitySubNavigation",
    "sectionBody",
    "enrolBlock",
    "link"
  ],
  sectionHero: ["sectionHero", "header", "pageHeading"],
  header: ["header"],
  pageHeading: ["pageHeading"],
  activitySubNavigation: ["activitySubNavigation"],
  sectionBody: ["sectionBody", "enrolBlock", "link"],
  enrolBlock: ["enrolBlock"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHero: "div";
  header: typeof Header;
  pageHeading: typeof PageHeading;
  activitySubNavigation: typeof ActivitySubNavigation;
  sectionBody: "div";
  enrolBlock: typeof EnrolBlock;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStep2LinuxAdministrationLessons12__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStep2LinuxAdministrationLessons12__VariantsArgs;
    args?: PlasmicStep2LinuxAdministrationLessons12__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicStep2LinuxAdministrationLessons12__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<
      PlasmicStep2LinuxAdministrationLessons12__ArgsType,
      ReservedPropsType
    > &
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
      internalArgPropNames: PlasmicStep2LinuxAdministrationLessons12__ArgProps,
      internalVariantPropNames:
        PlasmicStep2LinuxAdministrationLessons12__VariantProps
    });

    return PlasmicStep2LinuxAdministrationLessons12__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStep2LinuxAdministrationLessons12";
  } else {
    func.displayName = `PlasmicStep2LinuxAdministrationLessons12.${nodeName}`;
  }
  return func;
}

export const PlasmicStep2LinuxAdministrationLessons12 = Object.assign(
  // Top-level PlasmicStep2LinuxAdministrationLessons12 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHero: makeNodeComponent("sectionHero"),
    header: makeNodeComponent("header"),
    pageHeading: makeNodeComponent("pageHeading"),
    activitySubNavigation: makeNodeComponent("activitySubNavigation"),
    sectionBody: makeNodeComponent("sectionBody"),
    enrolBlock: makeNodeComponent("enrolBlock"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicStep2LinuxAdministrationLessons12
    internalVariantProps:
      PlasmicStep2LinuxAdministrationLessons12__VariantProps,
    internalArgProps: PlasmicStep2LinuxAdministrationLessons12__ArgProps
  }
);

export default PlasmicStep2LinuxAdministrationLessons12;
/* prettier-ignore-end */
