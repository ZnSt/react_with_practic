import styled from "styled-components";

export const Button = styled.button`
  height: 26px;
  width: 160px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 35px;
  color: ${(props) => (props.light ? "#111B47" : "#ffffff")};
  font-wight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  background-color: ${(props) => (props.light ? "transparent" : "#111B47")};
  border-radius: 2px;
  border-color: ${(props) => (props.light ? "#111B47" : "transparent")};
  cursor: pointer;
`;
