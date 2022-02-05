import React from 'react';
import { AppWrapper } from './context/state'
import HomeScreen from './screens/HomeScreen';
import TicketDetails from './screens/TicketDetails';
import {AppProvider} from './AppContext'




function App() {
  return (
    <AppProvider>
      <TicketDetails />
    </AppProvider>
  );
}

export default App;
