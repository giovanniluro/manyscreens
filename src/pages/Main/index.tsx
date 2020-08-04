import React, { useState } from 'react';
import { Container, Monitor, Content, Buttons, Screen, Button1, Button2, ScreenDetail, Foot, Base, Size } from './style';


const Main: React.FC = () => {

  const [monitor, setMonitor] = useState('360x680');

  return (
    <Container >
      <Content>
        <h1>Popular screens on the web</h1>
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

      <Buttons>
        <button onClick={() => setMonitor('800x600')}>1997</button>
        <button onClick={() => setMonitor('1024x768')}>2002</button>
        <button onClick={() => setMonitor('1280x1024')}>2009</button>
        <button onClick={() => setMonitor('1980x1080')}>2015</button>
        <button onClick={() => setMonitor('360x680')}>...?</button>
      </Buttons>
    </Container>
  )
}

export default Main;