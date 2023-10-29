// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qo8TRN16ADizSE4k432S4w
// Component: 4tmEIq6Pi4J0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import Header from "../../Header"; // plasmic-import: EJkb5HtYOQZW/component
import Button from "../../Button"; // plasmic-import: 7dr9nA4iZG8X/component
import Footer from "../../Footer"; // plasmic-import: j9SCK1PNbqFQ/component

import { useScreenVariants as useScreenVariantsnAq2AMfGe5Lj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nAQ2aMFGe5LJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: qo8TRN16ADizSE4k432S4w/projectcss
import sty from "./PlasmicContactUs.module.css"; // plasmic-import: 4tmEIq6Pi4J0/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: OkvPHvnJXxw8/icon
import LoactionVectorsvgIcon from "./icons/PlasmicIcon__LoactionVectorsvg"; // plasmic-import: MKxF8HVYrCYR/icon
import PhoneVectorsvgIcon from "./icons/PlasmicIcon__PhoneVectorsvg"; // plasmic-import: d367c61_vBfu/icon
import EmailVectorsvgIcon from "./icons/PlasmicIcon__EmailVectorsvg"; // plasmic-import: DzwAfwKC0wDG/icon

createPlasmicElementProxy;

export type PlasmicContactUs__VariantMembers = {};
export type PlasmicContactUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactUs__VariantsArgs;
export const PlasmicContactUs__VariantProps = new Array<VariantPropType>();

export type PlasmicContactUs__ArgsType = {};
type ArgPropType = keyof PlasmicContactUs__ArgsType;
export const PlasmicContactUs__ArgProps = new Array<ArgPropType>();

export type PlasmicContactUs__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageBanerSection?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  formContainer2?: p.Flex<"div">;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultContactUsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactUs__RenderFunc(props: {
  variants: PlasmicContactUs__VariantsArgs;
  args: PlasmicContactUs__ArgsType;
  overrides: PlasmicContactUs__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnAq2AMfGe5Lj()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
          />

          <div
            data-plasmic-name={"pageBanerSection"}
            data-plasmic-override={overrides.pageBanerSection}
            className={classNames(projectcss.all, sty.pageBanerSection)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__olhl3)}>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__edENv
                )}
              >
                {"Contact Us"}
              </h1>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__bXhuX)}>
            <div className={classNames(projectcss.all, sty.freeBox___4Hc5J)}>
              <div className={classNames(projectcss.all, sty.freeBox___5UYfQ)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__re3Uh)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__kekqq)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__ykuTg)}
                    >
                      <p.PlasmicImg
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(sty.img)}
                        displayHeight={"100%"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/professional_services/images/globeTrotter18280791920Jpg.jpg",
                          fullWidth: 1920,
                          fullHeight: 1280,
                          aspectRatio: undefined
                        }}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__o5Hbg)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___710Ko
                        )}
                      >
                        <h1
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1__bXGvq
                          )}
                        >
                          {"Get In touch"}
                        </h1>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__coFFm
                          )}
                        >
                          {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                          }
                        </div>
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"formContainer2"}
                          data-plasmic-override={overrides.formContainer2}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.formContainer2
                          )}
                        >
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.columns__ll69K
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__dr7K7
                              )}
                            >
                              <input
                                className={classNames(
                                  projectcss.all,
                                  projectcss.input,
                                  sty.textInput__ga5Dt
                                )}
                                placeholder={"First name"}
                                size={1}
                                type={"text"}
                                value={""}
                              />
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___9EfY5
                              )}
                            >
                              <input
                                className={classNames(
                                  projectcss.all,
                                  projectcss.input,
                                  sty.textInput__zxLtM
                                )}
                                placeholder={"Last name"}
                                size={1}
                                type={"text"}
                                value={""}
                              />
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___6PwuP
                              )}
                            >
                              <input
                                className={classNames(
                                  projectcss.all,
                                  projectcss.input,
                                  sty.textInput__ouaaj
                                )}
                                placeholder={"Email address"}
                                size={1}
                                type={"text"}
                                value={""}
                              />
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__tfAsF
                              )}
                            >
                              <input
                                className={classNames(
                                  projectcss.all,
                                  projectcss.input,
                                  sty.textInput___3UGxB
                                )}
                                placeholder={"Phone number"}
                                size={1}
                                type={"text"}
                                value={""}
                              />
                            </div>
                          </p.Stack>
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.columns__nQfRp
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__aL3L5
                              )}
                            >
                              <input
                                className={classNames(
                                  projectcss.all,
                                  projectcss.input,
                                  sty.textInput__dyDZw
                                )}
                                placeholder={"Company"}
                                size={1}
                                type={"text"}
                                value={""}
                              />
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___3Fc1H
                              )}
                            >
                              <textarea
                                data-plasmic-name={"textarea"}
                                data-plasmic-override={overrides.textarea}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.textarea,
                                  sty.textarea
                                )}
                                placeholder={"Message"}
                                value={""}
                              />

                              <Button
                                data-plasmic-name={"button"}
                                data-plasmic-override={overrides.button}
                                className={classNames(
                                  "__wab_instance",
                                  sty.button
                                )}
                                color={"blackCoffee"}
                                submitsForm={true}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__ark6N
                                  )}
                                >
                                  {"Send Message"}
                                </div>
                              </Button>
                            </div>
                          </p.Stack>
                        </p.Stack>
                      </p.Stack>
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section___1YSQv)}>
            <div className={classNames(projectcss.all, sty.freeBox__ekuUq)}>
              <div className={classNames(projectcss.all, sty.freeBox__qVgXy)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__stP8G)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__yRvHm)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__acDkd)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__e5Hqd
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__j6F8V
                          )}
                        >
                          <LoactionVectorsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__efuup
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__h6IJp
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__fwkh
                            )}
                          >
                            {"Address"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__lvb5W
                            )}
                          >
                            {"121 state lorem state"}
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__iKwlV)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ws34H
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__nVNh
                          )}
                        >
                          <PhoneVectorsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___29FCi
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__fwejT
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___5WpBt
                            )}
                          >
                            {"Phone"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__iFph
                            )}
                          >
                            {"888888885588"}
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___0UFuY)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___61ARz
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__jlXpo
                          )}
                        >
                          <EmailVectorsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___3JCgl
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__vuz2M
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__eiJdu
                            )}
                          >
                            {"Email"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vx6RM
                            )}
                          >
                            {"Info@gmail.com"}
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "pageBanerSection",
    "img",
    "formContainer2",
    "textarea",
    "button",
    "footer"
  ],
  header: ["header"],
  pageBanerSection: ["pageBanerSection"],
  img: ["img"],
  formContainer2: ["formContainer2", "textarea", "button"],
  textarea: ["textarea"],
  button: ["button"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanerSection: "div";
  img: typeof p.PlasmicImg;
  formContainer2: "div";
  textarea: "textarea";
  button: typeof Button;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactUs__VariantsArgs;
    args?: PlasmicContactUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactUs__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContactUs__ArgProps,
          internalVariantPropNames: PlasmicContactUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactUs";
  } else {
    func.displayName = `PlasmicContactUs.${nodeName}`;
  }
  return func;
}

export const PlasmicContactUs = Object.assign(
  // Top-level PlasmicContactUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    img: makeNodeComponent("img"),
    formContainer2: makeNodeComponent("formContainer2"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicContactUs
    internalVariantProps: PlasmicContactUs__VariantProps,
    internalArgProps: PlasmicContactUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactUs;
/* prettier-ignore-end */