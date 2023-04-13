import styled from "styled-components";
import { TinyText } from "../texts";

interface TextField {
  label: string;
}

const Label = styled.label`
  font-family: "Inter", cursive;
  font-size: 12px;
  display: block;
`;
const Input = styled.input`
  width: 163px;
  height: 37px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Inter", cursive;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-start;
`;

const TextField = ({ label }: TextField) => {
  return (
    <>
      <Container>
        <Label>
          <TinyText>{label}</TinyText>
        </Label>
        <Input name={label} placeholder={label}></Input>
      </Container>
    </>
  );
};

export { TextField };
