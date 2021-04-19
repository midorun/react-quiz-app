import styled, { createGlobalStyle } from 'styled-components'

import BGImg from '../../imgs/bg-img.jpg';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif
    }
    
    html {
        height: 100%;
    }

    body {
      background: url(${BGImg}) center center / cover no-repeat;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content:center;
      color: #ffffff;
      font-size: 1.3rem
    }

    button{
      min-height: 25px;
      padding: 0 10px;
      border-radius: 15px;
      border: none;
      opacity: .9;
      cursor: pointer;
      font-size: 1.2rem;

      :hover{
        opacity: .7;
      }
    }

`

export const Wrapper = styled.div`
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonStart = styled.button`
  width: 150px;
  background-color: #fff;
`;

export const ButtonNext = styled.button`
  width: 100px;
  background-color: #fff;
`;

