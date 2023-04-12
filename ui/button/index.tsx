import styled from "styled-components";

const Button = styled.button<{
  background: string;
  cursor: string;
  width: string;
  height: string;
}>`
  width: ${(props: any) => props.width || "163px"};
  height: ${(props: any) => props.height || "37px"};
  border-radius: 8px;
  background-color: ${(props: any) => props.background || "var(--blue)"};
  font-size: 16px;
  font-weight: 700;
  font-family: "Inter", cursive;
  color: ${(props: any) => props.color || "#fff"};
  cursor: ${(props: any) => props.cursor || "default"}; ;
`;
const OutlineButton = styled.button`
  outline: none;
  color: #000;
  font-family: "Inter", cursive;
  font-size: 16px;
  background-color: transparent;
  border: none;
  width: 64px;
  height: 40px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { Button, OutlineButton };
