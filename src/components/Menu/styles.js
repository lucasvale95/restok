import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBar = styled.nav`
  width: 20%;
  min-width: 240px;
  max-width: 280px;
  height: 100%;
  background-color: ${(props) => props.theme.menusColor};
  transition: 0.4s;

  gap: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SmallSideBar = styled.nav`
  width: 60px;
  height: 100%;
  background-color: ${(props) => props.theme.menusColor};
  transition: 0.4s;

  gap: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SmallStyledLink = styled(Link)`
  width: 65%;
  height: 40px;

  padding: 9px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? props.theme.secondaryColor : "#eee")};
  background-color: ${(props) => props.active && props.theme.bgMenu};
`;

export const StyledLink = styled(Link)`
  width: 80%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  border-radius: 20px;
  gap: 8px;
  color: ${(props) => (props.active ? props.theme.secondaryColor : "#eee")};
  background-color: ${(props) => props.active && props.theme.bgMenu};
  text-decoration: none;
  font-size: medium;
  letter-spacing: 0.2px;
`;
