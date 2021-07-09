import styled from "styled-components";

export const IndexContainer = styled.div`
  background-color: #F7F7F7;
  height: 100%;
  width: 100%;
`;

export const IndexMain = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 50px 5vw;
  max-width: 1400px;
  margin: 0 auto;
  p {
    color: gray;
  }
  >p:first-of-type {
    color: #AB92E5;
  }
  h1, p {
    max-width: 500px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  align-items: flex-end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  grid-gap: 50px;
  p {
    color: black;
  }
  >div {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 8px;
    >p:first-of-type {
      margin-top: 0;
    }
    h2 {
      margin: 10px 0;
    }
    .description, .annum {
      color: gray;
      font-weight: normal;
    }
    &:first-of-type {
      border: 1px solid #cd7f32;
    }
    &:nth-of-type(2) {
      border: 1px solid #FFD700;
    }
    &:nth-of-type(3) {
      border: 1px solid #e5e4e2;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
  opacity: .5;
`;

export const TierButton = styled.button`
  width: 100%;
  padding: 20px 15px;
  outline: none;
  color: ${({color}) => color};
  background-color: ${({background}) => background};
  margin-top: 30px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  &:disabled {
    cursor: not-allowed;
  }
`;