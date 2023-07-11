import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
