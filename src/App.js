
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navb } from './Components/Navb';
import {Home} from './Home';
import {About} from './About';
import {Users} from './Users';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
 
} from "react-router-dom";





function App() {
  
return(
<>
<BrowserRouter>
<Navb/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Users' element={<Users/>}/>
<Route path='/About' element={<About/>}/>


</Routes>
</BrowserRouter>

</>
)
  
}

export default App;
