import React from 'react';
import { AppWrapper } from './context/state'
import HomeScreen from './screens/HomeScreen';



function App() {
  return (
    <AppWrapper className="App">
      <HomeScreen />
    </AppWrapper>
  );
}

export default App;
