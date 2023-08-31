import { styled } from "styled-components";

 export const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  background: #000;
  color: white;
  border: none;
  font-size: 16px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color:white;
    transition: 0.3s background ease-in;
  }
`;
