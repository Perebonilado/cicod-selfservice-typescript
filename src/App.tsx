import View from './screens/View';
import {AppProvider} from './AppContext'
import {BrowserRouter as Router, useLocation, useNavigate, useSearchParams } from 'react-router-dom'


function App() {
  
  return (
    <AppProvider>
      <Router>
     <View />
    </Router>
    </AppProvider>
  );
}

export default App;

     
