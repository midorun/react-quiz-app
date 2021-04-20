import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  p{
    width: 550px;
    text-align: center;
    line-height: 30px;
  }
`;

type ButtonAnswerProps = {
  correct: boolean | undefined
  userClicked: boolean | undefined
}

export const ButtonAnswer = styled.button<ButtonAnswerProps>`
    margin-bottom: 20px;
    padding: 5px;
    width: 350px;
    min-height: 30px;
    color:rgb(0, 0, 0);

    ${({ correct, userClicked }) => {
    if (correct) {
      return (`
          background: linear-gradient(90deg, rgba(153, 219, 71, 1) 0%, rgba(54, 244, 91, 1) 50%, rgba(153, 219, 71, 1) 100%);
        `)

    } else if (!correct && userClicked) {
      return `
        background: linear-gradient(90deg, rgba(235, 81, 70, 1) 0%, rgba(237, 52, 38, 1) 50%, rgba(235, 81, 70, 1) 100%)
      `
    }
  }}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
 
`;




