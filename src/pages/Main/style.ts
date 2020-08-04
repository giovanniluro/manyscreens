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
  justify-content: center;
`

export const Content = styled.div`
  height: 40vw;
  width: 80vw;
  position: relative;
  background: #4F759B;
  border-radius: 12px;
  display: flex;
  justify-content: center;

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
`

export const Button2 = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 2;
  
  ${props => props.monitor === '800x600' && css`
    height: 3%;
    width: 14%;
    background: #0A0A0A;
    top: 68.5%;
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

`

export const Buttons = styled.div`
  display: flex; 
  margin-top: 40px;

  button {
    margin: 0 20px;
    border: 0;
    padding: 10px;
    background: white;
    border-radius: 8px;
    color: black;
    outline: 0;
    cursor: pointer;
  }
`