// import './App.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';

// function App(){
//     return (
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element = {<Home/>} />
//               <Home />
            
            
//           </Routes>


//         </BrowserRouter>
//     );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';

function App(){
    return (

        <BrowserRouter>
         <Navigation /> 
          <Routes>
            <Route path="/" element = {<Home/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App;