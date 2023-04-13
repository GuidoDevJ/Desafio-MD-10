import styled from "styled-components";

interface Title {
  text: string;
}

const Titulo = styled.h1`
  font-family: "Inter", cursive;
  font-size: 48px;
  line-height: 59px;
  font-weight: 700;
  color: ${(props) => props.color || "#000"};
`;
const SubTitle = styled(Titulo)`
  font-size: 32px;
  color: ${(props) => props.color || "#fff"};
`;
const Text = styled.h2`
  font-family: "Inter", cursive;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: ${(props) => props.color || "#fff"};
  cursor: pointer;
`;

const LargeText = styled(Text)`
  color: #fff;
  font-weight: 700;
`;

const Body = styled.p`
  font-family: "Inter", cursive;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${(props) => props.color || "#fff"};
`;

const BodyBold = styled(Body)`
  font-weight: 700;
`;
const TinyText = styled.p`
  font-family: "Inter", cursive;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

export { Titulo, SubTitle, Text, LargeText, Body, BodyBold, TinyText };
