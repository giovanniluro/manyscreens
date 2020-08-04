import styled, { createGlobalStyle, css } from 'styled-components';

//Pallete https://coolors.co/dad7cd-171219-588157-3a5a40-d35122-212021-080e20-faf7fa-545952

interface MonitorProps {
  monitor: number;
}

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    transition: .5s ease;
  }

  html, body, #root {
    overflow: hidden;
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
  height: 500px;
  width: 1000px;
  position: relative;
  background: #4F759B;
  border-radius: 12px;
  display: flex;
`

export const Monitor = styled.div<MonitorProps>`
  
  position: absolute;

  ${props => props.monitor === 1 && css`
    height: 60%;
    width: 28%;
    background: #fbfbfb;
    top: 20%;
    left: 36%;
    z-index: 1;
  `}

  ${props => props.monitor === 2 && css`
    height: 54%;
    width: 34%;
    background: #fbfbfb;
    top: 16.5%;
    left: 33%;
    z-index: 1;
  `}
`
export const Screen = styled.div<MonitorProps>`
  
  position: absolute;
  z-index: 2;

  ${props => props.monitor === 1 && css`
    height: 40%;
    width: 24%;
    background: #0A0A0A;
    top: 24%;
    left: 38%;
    border-radius: 6px;
  `}

  ${props => props.monitor === 2 && css`
    height: 40%;
    width: 30%;
    background: linear-gradient(120deg ,#0A0A0A, #141414);
    top: 20%;
    left: 35%;
    z-index: 2;
    border-radius: 6px;
  `}
`

export const Button1 = styled.div<MonitorProps>`
  
  position: absolute;

  ${props => props.monitor === 1 && css`
    height: 4%;
    width: 2%;
    background: #0A0A0A;
    border-radius: 50%;
    top: 68%;
    left: 38%;
    z-index: 2;
  `}

  ${props => props.monitor === 2 && css`
    height: 5%;
    width: 2.5%;
    background: #CBC7B9;
    border-radius: 50%;
    top: 63%;
    left: 62%;
    z-index: 2;
  `}
`

export const Button2 = styled.div<MonitorProps>`
  
  position: absolute;

  ${props => props.monitor === 1 && css`
    height: 3%;
    width: 14%;
    background: #0A0A0A;
    top: 68.5%;
    left: 41.5%;
    z-index: 2;
  `}

  ${props => props.monitor === 2 && css`
    height: 3%;
    width: 1.5%;
    background: #588157;
    top: 64.5%;
    left: 60%;
    z-index: 2;
    border-radius: 50%;
  `}
`

export const ScreenDetail = styled.div<MonitorProps>`
  position: absolute;

  ${props => props.monitor === 1 && css`
    height: 5%;
    width: 2.5%;
    background: transparent;
    top: 27.5%;
    left: 39.5%;
    border-radius: 4px 0 0 0;
    z-index: 2;
    border-top: 5px solid #fbfbfb;
    border-left: 5px solid #fbfbfb;
  `}

  ${props => props.monitor === 2 && css`
    height: 2%;
    width: 1%;
    background: transparent;
    top: 22.5%;
    left: 36.5%;
    border-radius: 4px 0 0 0;
    z-index: 2;
    border-top: 4px solid #fbfbfb;
    border-left: 4px solid #fbfbfb;
  `}
`

export const Foot = styled.div<MonitorProps>`
  position: absolute;

  ${props => props.monitor === 1 && css`
    height: 0%;
    width: 10%;
    top: 70%;
    left: 45%;
  `}

  ${props => props.monitor === 2 && css`
    height: 10%;
    width: 10%;
    background: transparent;
    top: 70%;
    left: 45%;
    border-radius: 4px 0 0 0;
    z-index: 1;
    background: #DCDAD0;
  `}
`

export const Base = styled.div<MonitorProps>`

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
  }
`