import * as React from "react";
import classes from "../../design/heading.inputs.classes";
import { joinClasses } from "@emtech/utils";

export interface IHeadingClasses {
  alignment: {
    center: string;
    left: string;
    right: string;
  };
  boldness: {
    extralight: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
  };
  textsize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
  };
}
export interface IHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  align?: keyof IHeadingClasses["alignment"];
  boldness?: keyof IHeadingClasses["boldness"];
  textsize: keyof IHeadingClasses["textsize"];
}

export const Heading = ({
  className,
  align,
  boldness,
  textsize,
  children,
  ...props
}: IHeadingProps) => {
  return (
    <>
      {textsize === "6xl" && (
        <h6
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h6>
      )}

      {textsize === "5xl" && (
        <h6
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h6>
      )}

      {textsize === "4xl" && (
        <h6
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h6>
      )}

      {textsize === "3xl" && (
        <h6
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h6>
      )}

      {textsize === "2xl" && (
        <h1
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h1>
      )}

      {textsize === "xl" && (
        <h2
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h2>
      )}

      {textsize === "lg" && (
        <h3
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h3>
      )}

      {textsize === "md" && (
        <h4
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h4>
      )}

      {textsize === "sm" && (
        <h5
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h5>
      )}

      {textsize === "xs" && (
        <h6
          {...props}
          className={joinClasses(
            classes.alignment[align ?? "left"],
            classes.boldness[boldness ?? "bold"],
            classes.textsize[textsize],
            className
          )}
        >
          {children}
        </h6>
      )}
    </>
  );
};
