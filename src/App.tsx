import React from 'react';
import { AppWrapper } from './context/state'
import HomeScreen from './screens/HomeScreen';
import TicketDetails from './screens/TicketDetails';




function App() {
  return (
    <AppWrapper className="App">
      <TicketDetails />
    </AppWrapper>
  );
}

export default App;
