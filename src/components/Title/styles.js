import styled from "styled-components";

export const TitleHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  border-bottom: 3px solid #343b48;
  background-color: #1b1d23;
  user-select: none;
  -webkit-user-select: none;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 40px;

  .topBtn {
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #272c36;
    }

    &:active {
      background-color: #4f9fee;
    }
  }
`;

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #272c36;
  }

  &:active {
    background-color: #4f9fee;
  }
`;

export const TitleLogo = styled.div`
  margin-left: 10px;
  width: 100%;
  line-height: 30px;
  margin-top: 5px;
  padding-bottom: 5px;
  -webkit-app-region: drag;
`;
