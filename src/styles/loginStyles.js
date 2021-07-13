import styled from "styled-components";

export const Form = styled.form`
    input, button {
      width: 250px;
    }
  button {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #eee;
  &:active, &:focus {
    border: 1px solid black;
  }
`;

export const LoginContainer = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;