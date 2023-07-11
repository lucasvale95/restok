import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
`;

export const HeaderHome = styled.main`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 35px;

  border-bottom: 1px solid #c9c9c9;

  h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
`;

export const OpenCloseButton = styled.button`
  width: 150px;
  height: 30px;

  gap: 8px;
  font-weight: 600;
  cursor: pointer;

  border-radius: 15px;
  border: 1px solid #aaa;
  background-color: ${(props) => (props.isOpen ? "#c13617" : "#92e37c")};
  padding: 10px;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.isOpen ? "#da370f" : "#68d14f")};
  }
`;

export const MainHome = styled.div`
  width: 100%;
  height: calc(100vh - 70px);

  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    padding: 20px 0;
  }
`;

export const TotalOrders = styled.section`
  width: 13%;
  height: 90px;
  background-color: ${(props) => props.theme.bgItems};
  border-radius: 15px;
  padding: 7px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 40px;

    p {
      font-weight: 600;
      font-size: 22px;
    }
  }
`;

export const LeftSection = styled.section`
  width: 45%;

  padding: 20px;
  border-radius: 20px;

  background-color: ${(props) => props.theme.bgItems};

  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.section`
  width: 45%;
  padding: 20px;

  background-color: ${(props) => props.theme.bgItems};

  display: flex;
  flex-direction: column;
`;
