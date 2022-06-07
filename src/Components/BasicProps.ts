import { css } from "styled-components";

export interface basicProps {
  children?: any;

  padding?: string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;

  margin?: string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;

  style?: React.CSSProperties;
  className?: string;
  id?: string;

  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;

  border?: string;
  borderBottom?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: string | number;

  position?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;

  fontFamily?: string | number;
  fontSize?: string | number;
  textColor?: string | number;
  fontWeight?: string | number;
}

export interface flexProps {
  flex?: boolean;
  gap?: number | string;
  flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center";
  alignItems?:
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center";
}

export const basicStyles = css<basicProps>`
  // padding
  ${(props) => props.padding && "padding: " + props.padding + ";"}
  ${(props) =>
    props.paddingRight && "padding-right: " + props.paddingRight + ";"}
  ${(props) => props.paddingLeft && "padding-left: " + props.paddingLeft + ";"}
  ${(props) =>
    props.paddingBottom && "padding-bottom: " + props.paddingBottom + ";"}
  ${(props) => props.paddingTop && "padding-top: " + props.paddingTop + ";"}
  // margin
  ${(props) => props.margin && "margin: " + props.margin + ";"}
  ${(props) => props.marginRight && "margin-right: " + props.marginRight + ";"}
  ${(props) => props.marginLeft && "margin-left: " + props.marginLeft + ";"}
  ${(props) =>
    props.marginBottom && "margin-bottom: " + props.marginBottom + ";"}
  ${(props) => props.marginTop && "margin-top: " + props.marginTop + ";"}
  // width and height
  ${(props) => props.height && "height: " + props.height + ";"}
  ${(props) => props.width && "width: " + props.width + ";"}
  ${(props) => props.maxWidth && "max-width: " + props.maxWidth + ";"}
  ${(props) => props.minHeight && "min-height: " + props.minHeight + ";"}
  ${(props) => props.maxHeight && "max-height: " + props.maxHeight + ";"}
  ${(props) => props.minWidth && "min-width: " + props.minWidth + ";"}
  // border
  ${(props) => props.border && "border: " + props.border + ";"}
  ${(props) => props.borderRight && "border-right: " + props.borderRight + ";"}
  ${(props) => props.borderLeft && "border-left: " + props.borderLeft + ";"}
  ${(props) => props.borderTop && "border-top: " + props.borderTop + ";"}
  ${(props) =>
    props.borderBottom && "border-bottom: " + props.borderBottom + ";"}
  ${(props) =>
    props.borderRadius && "border-radius: " + props.borderRadius + ";"}
  // postion
  ${(props) => props.position && "position: " + props.position + ";"}
  ${(props) => props.top && "top: " + props.top + ";"}
  ${(props) => props.left && "left: " + props.left + ";"}
  ${(props) => props.right && "right: " + props.right + ";"}
  ${(props) => props.bottom && "bottom: " + props.bottom + ";"}
  // font
  ${(props) => props.fontFamily && "font-family: " + props.fontFamily + ";"}
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`}
  // color
  ${(props) => props.textColor && `color: ${props.textColor};`}
`;

export const flexStyles = css<flexProps>`
  ${(props) => props.flex && "display: flex;"}
  ${(props) => props.gap && "gap: " + props.gap + ";"}
  ${(props) =>
    props.flexDirection && "flex-direction: " + props.flexDirection + ";"}
  ${(props) =>
    props.justifyContent && "justify-content: " + props.justifyContent + ";"}
  ${(props) => props.alignItems && "align-items: " + props.alignItems + ";"}
`;
