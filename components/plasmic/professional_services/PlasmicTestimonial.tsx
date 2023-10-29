// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qo8TRN16ADizSE4k432S4w
// Component: 5YvLxLWTv5Hw

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: qo8TRN16ADizSE4k432S4w/projectcss
import sty from "./PlasmicTestimonial.module.css"; // plasmic-import: 5YvLxLWTv5Hw/css

createPlasmicElementProxy;

export type PlasmicTestimonial__VariantMembers = {};
export type PlasmicTestimonial__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonial__VariantsArgs;
export const PlasmicTestimonial__VariantProps = new Array<VariantPropType>();

export type PlasmicTestimonial__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTestimonial__ArgsType;
export const PlasmicTestimonial__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicTestimonial__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTestimonialProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonial__RenderFunc(props: {
  variants: PlasmicTestimonial__VariantsArgs;
  args: PlasmicTestimonial__ArgsType;
  overrides: PlasmicTestimonial__OverridesType;
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

  return (
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zbyOp)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </p.Stack>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hhMjR)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__aG5Rx)}
                displayHeight={"64px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"64px"}
                src={
                  "https://www.caa.com/sites/default/files/styles/headshot_500x500/public/speaker-headshots/Morgan_CAAspeakers_Heashot_Web.jpg?itok=WCOhQ1Hj"
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rc6VN)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__dOvk6)}>
                  <h5
                    className={classNames(
                      projectcss.all,
                      projectcss.h5,
                      projectcss.__wab_text,
                      sty.h5__n9Puy
                    )}
                  >
                    {"Lorem doi"}
                  </h5>
                </div>
              </p.Stack>
            </React.Fragment>
          ),
          value: args.slot
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonial__VariantsArgs;
    args?: PlasmicTestimonial__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestimonial__ArgsType,
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
          internalArgPropNames: PlasmicTestimonial__ArgProps,
          internalVariantPropNames: PlasmicTestimonial__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */
