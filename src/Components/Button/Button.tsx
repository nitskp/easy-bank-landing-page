import styled from "styled-components";

interface Props {
  children: string;
}

const StyledButton = styled.button`
  background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  border: transparent;
  border-radius: 25px;
  color: white;
  padding: 10px 18px;
`;

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
