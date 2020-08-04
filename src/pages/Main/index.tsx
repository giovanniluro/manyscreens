import React, { useState } from 'react';
import { Container, Monitor, Content, Buttons, Screen, Button1, Button2, ScreenDetail, Foot, Base } from './style';


const Main: React.FC = () => {

  const [monitor, setMonitor] = useState(4);

  return (
    <Container >
      <Content>
        <Monitor monitor={monitor} />
        <Screen monitor={monitor} />
        <ScreenDetail monitor={monitor} />
        <Button1 monitor={monitor} />
        <Button2 monitor={monitor} />
        <Foot monitor={monitor} />
        <Base monitor={monitor} />
      </Content>

      <Buttons>
        <button onClick={() => setMonitor(1)}>1997</button>
        <button onClick={() => setMonitor(2)}>2002</button>
        <button onClick={() => setMonitor(3)}>2009</button>
        <button onClick={() => setMonitor(4)}>2015</button>
      </Buttons>
    </Container>
  )
}

export default Main;