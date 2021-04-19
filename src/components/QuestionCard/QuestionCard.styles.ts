import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  p{
    width: 550px;
    text-align: center;
    line-height: 30px;
  }
`;

interface ButtonAnswerProps {
  correct: boolean,
  userClicked: boolean
}

export const ButtonAnswer = styled.button`
    margin-bottom: 20px;
    padding: 5px;
    width: 350px;
    min-height: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;




