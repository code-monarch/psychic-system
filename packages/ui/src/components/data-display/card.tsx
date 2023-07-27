import React, {ReactNode} from "react";
import classes from "../../design/card.data-display.classes";
import { joinClasses } from "@emtech/utils";
import {IFullWidthProps, FullWidth} from "../layout/full-width";
import {IHeadingProps, Heading} from "../inputs/heading";
import {IButtonProps, Button} from "../controls/button";

export interface ICardClasses {
  base: string;
  cardImgTop: string;
  cardContent: string;
  cardTitle: string;
  cardDescription: string;
}
// Card Root
interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/** Card Components is made up of CardHeader, CardTitle, CardContent, CardDescription, CardCTA
 */
const Card = ({children, className, ...props}: ICardProps) => (
  <div {...props} className={joinClasses(classes.base, className)}>
    {children}
  </div>
);
// Card Root End

// Card Header
interface ICardHeaderProps extends IFullWidthProps {}

/** Card Header should contain Card image Top or somthing else
 */
const CardHeader = ({children, ...props}: ICardHeaderProps) => (
  <FullWidth {...props}>{children}</FullWidth>
);
// Card Header End

// Card Title
interface ICardTitleProps extends IHeadingProps {}

const CardTitle = ({children, ...props}: ICardTitleProps) => (
  /** Title of Card
   */
  <Heading {...props}>{children}</Heading>
);
// Card Title End

// Card Description
interface ICardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}
/** Description of Card most likely a list or paragraph
 */
const CardDescription = ({children, ...props}: ICardDescriptionProps) => (
  <div {...props}>{children}</div>
);
// Card Description End

// Card CTA
interface ICardCTAProps extends IButtonProps {}
/** Card call to action button
 */
const CardCTA = ({children, ...props}: ICardCTAProps) => (
  <Button {...props} size="lg" fullwidth>
    {children}
  </Button>
);
// Card CTA End

// Card Content
interface ICardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const CardContent = ({children, ...props}: ICardContentProps) => (
  <div className={joinClasses(props.className, classes.cardContent)}>
    {children}
  </div>
);
// Card Content End

export {Card, CardHeader, CardTitle, CardDescription, CardCTA, CardContent};
