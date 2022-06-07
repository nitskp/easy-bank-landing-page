import { basicStyles, basicProps, flexStyles, flexProps } from "../BasicProps";
import styled, { css } from "styled-components";

interface Props extends basicProps, flexProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const H1 = styled.h1<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const H2 = styled.h2<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const H3 = styled.h3<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const H4 = styled.h4<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const H5 = styled.h5<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const H6 = styled.h6<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const Heading = (props: Props) => {
  const { type, children } = props;
  return type === "h1" ? (
    <H1 {...props}>{children}</H1>
  ) : type === "h2" ? (
    <H2 {...props}>children</H2>
  ) : type === "h3" ? (
    <H3 {...props}>children</H3>
  ) : type === "h4" ? (
    <H4 {...props}>children</H4>
  ) : type === "h5" ? (
    <H5 {...props}>children</H5>
  ) : (
    <H6 {...props}>children</H6>
  );
};

export default Heading;
