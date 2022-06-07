import { basicStyles, basicProps, flexStyles, flexProps } from "../BasicProps";
import styled, { css } from "styled-components";

interface Props extends basicProps, flexProps {
  type: "span" | "p";
}

const SPAN = styled.span<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const P = styled.p<Partial<Props>>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const Text = (props: Props) => {
  const { children, type } = props;
  return type === "p" ? (
    <P {...props}>{children}</P>
  ) : (
    <SPAN {...props}>{children}</SPAN>
  );
};

export default Text;
