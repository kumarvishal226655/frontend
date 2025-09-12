
import './App.css';
import{BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
     <switch>
      <Route path='/' exact>
      <Home>
        
      </Home>

      </Route>
     </switch>
    </BrowserRouter>
   
  );
}

export default App;
