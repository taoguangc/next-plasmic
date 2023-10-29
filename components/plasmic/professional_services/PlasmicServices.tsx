// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qo8TRN16ADizSE4k432S4w
// Component: dFoSZQJdzhUW

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
import ServicesWhite from "../../ServicesWhite"; // plasmic-import: 4zm947eWGB-d/component
import Footer from "../../Footer"; // plasmic-import: j9SCK1PNbqFQ/component

import { useScreenVariants as useScreenVariantsnAq2AMfGe5Lj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nAQ2aMFGe5LJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: qo8TRN16ADizSE4k432S4w/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: dFoSZQJdzhUW/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: 6EmGHJRkrRIE/icon

createPlasmicElementProxy;

export type PlasmicServices__VariantMembers = {};
export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageBanerSection?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultServicesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
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
            <div className={classNames(projectcss.all, sty.freeBox___1VJel)}>
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
                {"Services"}
              </h1>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__m6Xbd)}>
            <div className={classNames(projectcss.all, sty.freeBox__r9NQo)}>
              <div className={classNames(projectcss.all, sty.freeBox___6Au0W)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__bUe8D)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__gyp07)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column___0JNnw)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__jrRuu
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__dtXko
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__i9Z)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__dFgyn
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__iXwzx
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__egaTt)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__rcKgJ
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__jV1Qu
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___2Q1E6)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__w3QRd
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__q6RqH
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__v5M04)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__n4Knx
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__dcJqk
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__haU)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__nzCjx
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__hYheW
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__lpgZ)}>
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2__eVKr
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Why Choose Us"
                : "Our process"}
            </h2>
            <div className={classNames(projectcss.all, sty.freeBox___0Rl4)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__yyc7K)}
              >
                <div className={classNames(projectcss.all, sty.column__mwxUq)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__xMpKi
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__fy8Y
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column___1CrHv)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__ytjOj
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__d8TWe
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__ugeKf)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__oxqYs
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__jfF3X
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__yr0Pp)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__giJpg
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__bHufM
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__fX7X)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__muhdN
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__vKbF3
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__dt688)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__tG6Da
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__ck5Sa
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
              </p.Stack>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section___8UJg9)}>
            <div className={classNames(projectcss.all, sty.freeBox__uEWfD)}>
              <div className={classNames(projectcss.all, sty.freeBox__oJjyj)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___7AdiJ)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__bHxSn)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__ahjq4)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__jzUEl
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__qaG
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__lUpg)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__odVpt
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__ufzEe
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___4C9KN)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__yvvr4
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__zdbDm
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__tZ3Kx)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite___1Vep
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__tRbd2
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__hZn99)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__hJAyC
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___5Zk6L
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ihvf0)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__eDkqY
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__lrzfy
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section___0Wx9A)}>
            <div className={classNames(projectcss.all, sty.freeBox__t30Lz)}>
              <div className={classNames(projectcss.all, sty.freeBox__ijRzF)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lXjP)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns___4GWhl)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__hdxuM)}
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
                          src: "/plasmic/professional_services/images/woman32879561920Jpg.jpg",
                          fullWidth: 1920,
                          fullHeight: 1280,
                          aspectRatio: undefined
                        }}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___5HFk6)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ksRfg
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__bVm6I
                          )}
                        >
                          {"Why Choose Us"}
                        </h2>
                        <div
                          data-plasmic-name={"text"}
                          data-plasmic-override={overrides.text}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text
                          )}
                        >
                          {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                          }
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.columns__rfBsT
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__r7Lqi
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__iVUqP
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__xKFp
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__l88Pv
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__f6Lf
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__tQhi9
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__eq5Hv
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__okKWo
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__cuk6R
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__dSemF
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__ux9Hx
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__i85Sb
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
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
  root: ["root", "header", "pageBanerSection", "h1", "img", "text", "footer"],
  header: ["header"],
  pageBanerSection: ["pageBanerSection", "h1"],
  h1: ["h1"],
  img: ["img"],
  text: ["text"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanerSection: "div";
  h1: "h1";
  img: typeof p.PlasmicImg;
  text: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicServices__ArgsType,
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
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
