import React, { useState } from 'react';
import { Container, Social, Monitor, Content, Buttons, Screen, Button1, Button2, ScreenDetail, Foot, Base, Size } from './style';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Main: React.FC = () => {

  const [monitor, setMonitor] = useState('800x600');

  return (
    <Container >
      <Content>
        <h1>Resoluções populares na web</h1> 
        <Monitor monitor={monitor} />
        <Screen monitor={monitor}>
          <Size monitor={monitor}>
            {monitor}
          </Size>
        </Screen>
        <ScreenDetail monitor={monitor} />
        <Button1 monitor={monitor} />
        <Button2 monitor={monitor} />
        <Foot monitor={monitor} />
        <Base monitor={monitor} />
      </Content>

      <Social>
        <a href='https://linkedin.com/in/giovanniluro'><FiLinkedin /></a>
        <a href='https://github.com/giovanniluro/manyscreens'><FiGithub /></a>
      </Social>

      <Buttons monitor={monitor}>
        <div></div>
        <label className='btn-1'>
          <button onClick={() => setMonitor('800x600')}>1997</button>
          <div className={monitor === '800x600'?'selected':''}></div>
        </label>
        <label className='btn-2'>
          <button  onClick={() => setMonitor('1024x768')}>2002</button>
          <div className={monitor === '1024x768'?'selected':''}></div>
        </label>
        <label className='btn-3'>
          <button onClick={() => setMonitor('1280x1024')}>2009</button>
          <div className={monitor === '1280x1024'?'selected':''}></div>
        </label>
        <label className='btn-4'>
          <button onClick={() => setMonitor('1980x1080')}>2015</button>
          <div className={monitor === '1980x1080'?'selected':''}></div>
        </label>
        <label className='btn-5'>
          <button onClick={() => setMonitor('360x680')}>... ?</button>
          <div className={monitor === '360x680'?'selected':''}></div>
        </label></
      Buttons>
    </Container>
  )
}

export default Main;