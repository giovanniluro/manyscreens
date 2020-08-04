import styled, { createGlobalStyle, css } from 'styled-components';

//Pallete https://coolors.co/dad7cd-171219-588157-3a5a40-d35122-212021-080e20-faf7fa-545952

interface MonitorProps {
  monitor: string;
}

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    transition: .5s ease;
  }

  html, body, #root {
    transition: none;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
`

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  transition: none;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  margin-top: 40px;
  border: 6px solid #1d3557;
  height: 40vw;
  width: 80vw;
  position: relative;
  background: #4F759B;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  div {
    transform: translateZ(0);
  }

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    margin-top: 10px;
    
    @media(max-width: 600px) {
      font-size: 18px;
    }
  }

  @media(max-width: 500px) {
    height: 80vw;
    width: 160vw;
    border-radius: 0;
  }
`

export const Social = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    text-decoration: none;
    color: #ddd;
    padding: 15px;

    svg {
      height: 22px;
      width: 22px;
    }

    &:hover {
      opacity: .6;
    }
  }

  @media(max-width: 500px) {
    bottom: 0;  
    justify-content: center;
  }

`

export const Monitor = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 1;

  ${props => props.monitor === '800x600' && css`
    height: 60%;
    width: 28%;
    background: #fbfbfb;
    top: 20%;
    left: 36%;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 54%;
    width: 34%;
    background: #fbfbfb;
    top: 16.5%;
    left: 33%;
  `}

  ${props => props.monitor === '1280x1024' && css`
    height: 54%;
    width: 38%;
    background: linear-gradient(225deg,#6E756C,#545952);
    top: 16.5%;
    left: 31%;
    border-radius: 6px;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: 60%;
    width: 50%;
    background: linear-gradient(200deg ,#1F1F1F, #302A29);
    top: 16%;
    left: 25%;
    border-radius: 10px;
  `}

  ${props => props.monitor === '360x680' && css`
    height: 75%;
    width: 22%;
    background: linear-gradient(50deg ,#ccc, #fbfbfb);
    top: 16%;
    left: 39%;
    border-radius: 8px;
  `}
`

export const Screen = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.monitor === '800x600' && css`
    height: 40%;
    width: 24%;
    background: linear-gradient(275deg, #7AA479, #92B592);
    top: 24%;
    left: 38%;
    border-radius: 4px;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 40%;
    width: 30%;
    background: linear-gradient(120deg ,#292929, #141414);
    top: 20%;
    left: 35%;
    z-index: 2;
    border-radius: 6px;
  `}

  ${props => props.monitor === '1280x1024' && css`
    height: 46%;
    width: 34%;
    background: linear-gradient(200deg ,#0A0A0A, #141414);
    top: 20%;
    left: 33%;
    z-index: 2;
    border-radius: 14px;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: 56%;
    width: 48%;
    background: linear-gradient(200deg ,#131513, #141414);
    top: 18%;
    left: 26%;
    z-index: 2;
    border-radius: 10px;
  `}

  ${props => props.monitor === '360x680' && css`
    height: 65%;
    width: 20%;
    background: #0a0a0a;
    top: 18.5%;
    left: 40%;
    border-radius: 8px;
  `}  
`

export const Button1 = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 2;

  ${props => props.monitor === '800x600' && css`
    height: 4%;
    width: 2%;
    background: #0A0A0A;
    border-radius: 50%;
    top: 68%;
    left: 38%;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 5%;
    width: 2.5%;
    background: #CBC7B9;
    border-radius: 50%;
    top: 63%;
    left: 62%;
  `}

  ${props => props.monitor === '1280x1024' && css`
    height: 1%;
    width: 0.5%;
    background: #C14B1F;
    border-radius: 50%;
    top: 67.5%;
    left: 66%;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: .4%;
    width: 1.5%;
    background: #fbfbfb;
    top: 74.7%;
    left: 70%;
  `}

  ${props => props.monitor === '360x680' && css`
    height: 4%;
    width: 2%;
    background: #1f1f1f;
    border-radius: 50%;
    top: 84.5%;
    left: 49%;
    border: 3px solid black;
  `}
`

export const Button2 = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 2;
  
  ${props => props.monitor === '800x600' && css`
    height: 2%;
    width: 14%;
    background: #0A0A0A;
    top: 69%;
    left: 41.5%;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 3%;
    width: 1.5%;
    background: #588157;
    top: 64.5%;
    left: 60%;
    border-radius: 50%;
  `}

   ${props => props.monitor === '1280x1024' && css`
    height: 1%;
    width: 1%;
    background: #3A5A40;
    top: 67.5%;
    left: 64.5%;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: .4%;
    width: 1.5%;
    background: #fbfbfb;
    top: 74.7%;
    left: 67%;
  `}

  ${props => props.monitor === '360x680' && css`
    height: .5%;
    width: .25%;
    background: #fbfbfb;
    border-radius: 50%;
    border: 2px solid black;
    top: 16.5%;
    left: 50%;
  `}
`

export const ScreenDetail = styled.div<MonitorProps>`
  position: absolute;
  z-index: 2;

  ${props => props.monitor === '800x600' && css`
    height: 5%;
    width: 2.5%;
    background: transparent;
    top: 27.5%;
    left: 39.5%;
    border-radius: 4px 0 0 0;
    border-top: 5px solid #fbfbfb;
    border-left: 5px solid #fbfbfb;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 2%;
    width: 1%;
    background: transparent;
    top: 22.5%;
    left: 36.5%;
    border-radius: 4px 0 0 0;
    border-top: 4px solid #fbfbfb;
    border-left: 4px solid #fbfbfb;
  `}

  ${props => props.monitor === '1280x1024' && css`
    height: 3%;
    width: 1.5%;
    background: transparent;
    top: 22.5%;
    left: 63.5%;
    border-radius: 0 6px 0 0;
    border-top: 2px solid #fbfbfb;
    border-right: 2px solid #fbfbfb;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: .4%;
    width: 1.5%;
    background: #fbfbfb;
    top: 74.7%;
    left: 64%;
  `}

  ${props => props.monitor === '360x680' && css`
    height: .4%;
    width: 1.5%;
    background: black;
    top: 16.8%;
    left: 51.5%;
  `}
`

export const Foot = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 0;

  ${props => props.monitor === '800x600' && css`
    height: 0%;
    width: 10%;
    top: 70%;
    left: 45%;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 10%;
    width: 10%;
    background: #DCDAD0;
    top: 67%;
    left: 45%;
    transform: perspective(60px) rotateX(45deg) scaleX(0.7) scaleY(1.2);

    @media(max-width: 450px) {
      transform: perspective(60px) rotateX(45deg) scaleX(0.7) scaleY(1.4);
    }
  `}

  ${props => props.monitor === '1280x1024' && css`
    height: 10%;
    width: 10%;
    background: #1F1F1F;
    top: 67%;
    left: 45%;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: 6%;
    width: 3%;
    background: #1F1F1F;
    top: 75%;
    left: 48.5%;
  `}

  ${props => props.monitor === '360x680' && css`
    height: 0%;
    width: 0%;
    top: 70%;
    left: 50%;
  `}
`

export const Base = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 1;

  ${props => props.monitor === '800x600' && css`
    height: 0%;
    width: 20%;
    top: 70%;
    left: 40%;
  `}

  ${props => props.monitor === '1024x768' && css`
    height: 4%;
    width: 20%;
    background: #fbfbfb;
    top: 77%;
    left: 40%;
  `}

  ${props => props.monitor === '1280x1024' && css`
    height: 4%;
    width: 20%;
    background: #545952;
    top: 77%;
    left: 40%;
  `}

  ${props => props.monitor === '1980x1080' && css`
    height: 2%;
    width: 20%;
    background: #1F1F1F;
    top: 80%;
    left: 40%;
  `}

  ${props => props.monitor === '360x680' && css`
    height: 0%;
    width: 0%;
    top: 80%;
    left: 50%;
  `}
`

export const Size = styled.div<MonitorProps>`

  font-family: 'Play', sans-serif;
  z-index: 4;
  padding: 8px;

  @media(min-width: 650px) {
    font-size: 1.4em;
  }


  @media(min-width: 900px) {
    font-size: 1.8em;
  }
  
  ${props => props.monitor === '800x600' && css`
    border: 2px solid #0A0A0A;
    color: #0A0A0A;
    background: #283E2C;
  `}

  ${props => props.monitor === '1024x768' && css`
    border: 2px solid #fbfbfb;
    color: #fbfbfb;
    background: #4C3C53;
  `}

  ${props => props.monitor === '1280x1024' && css`
    border: 2px solid #fbfbfb;
    color: #fbfbfb;
    background: #0C1531;
  `}

  ${props => props.monitor === '1980x1080' && css`
    border: 2px solid #fbfbfb;
    color: #fbfbfb;
    background: transparent;
  `}

  ${props => props.monitor === '360x680' && css`
    border: 2px solid #2a9d8f;
    color: #2a9d8f;
    background: #323031;
  `}

`

export const Buttons = styled.div<MonitorProps>`
  display:flex;
  justify-content: space-around;
  margin-top: 40px;
  width: 90vw;
  position: relative;

  > label {

    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    width: 25%;

    button {
      border: 0;
      color: white;
      background: #e63946;
      border-radius: 4px;
      padding: 5px;
      font-size: 18px;
      font-weight: bold;
      outline: 0;
      margin-bottom: 20px;
      cursor: pointer;
    }

    > div {
      height: 15px;
      width: 15px;
      background: #fbfbfb;
      border-radius: 50%;
    }
  }

  ${props => props.monitor === '800x600' && css`
    .btn-1 {
      > div {
        background: #3c6e71;
      }
    }  
  `}

  ${props => props.monitor === '1024x768' && css`
    .btn-1 {
      > div {
        background: #3c6e71;
      }
    }  
    .btn-2 {
      > div {
        background: #3c6e71;
      }
    }  
  `}

  ${props => props.monitor === '1280x1024' && css`
    .btn-1 {
      > div {
        background: #3c6e71;
      }
    }  
    .btn-2 {
      > div {
        background: #3c6e71;
      }
    }
    .btn-3 {
      > div {
        background: #3c6e71;
      }
    }  
  `}

  ${props => props.monitor === '1980x1080' && css`
    .btn-1 {
      > div {
        background: #3c6e71;
      }
    }  
    .btn-2 {
      > div {
        background: #3c6e71;
      }
    }
    .btn-3 {
      > div {
        background: #3c6e71;
      }
    } 
    .btn-4 {
      > div {
        background: #3c6e71;
      }
    }  
  `}

  ${props => props.monitor === '360x680' && css`
    > label {
      >div{ 
        background: #3c6e71;
      }
    }
  `}


  > div {
    width: 80%;
    background: white;
    height: 10%;
    position: absolute;
    background: #3c6e71;
    bottom: 5px;
    left: 10%;
    z-index: 1;
    overflow: hidden;

      ${props => props.monitor === '800x600' && css`
        width: 0%;
      `}

      ${props => props.monitor === '1024x768' && css`
        width: 20%;
      `}

      ${props => props.monitor === '1280x1024' && css`
        width: 40%;
      `}

      ${props => props.monitor === '1980x1080' && css`
        width: 60%;
      `}

      ${props => props.monitor === '360x680' && css`
        width: 80%;
      `}
  }
`