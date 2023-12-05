import logo from './logo.svg';
import './App.css';
import Home from './Compont/Home';
import Userhome from './Compont/Userhome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Serviseprovider from './Compont/Serviseprovider';
import Userlogin from './Compont/Userlogin';
import Usersingup from './Compont/Usersingup';
import Servicelogin from './Compont/Servicelogin';
import Servicesingup from './Compont/Servicesingup';
import Service from './Compont/Service';

function App() {
  return (
    <div >

    <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/userhome'>
            <Userhome/>
          </Route>
          <Route path='/servicehome'>
           <Serviseprovider/>
          </Route>
          <Route path='/userlogin'>
            <Userlogin/>
          </Route>
          <Route path='/usersingup'>
          <Usersingup/>
          </Route>
          <Route path='/servicelogin'>
          <Servicelogin/>
          </Route>
          <Route path='/servicesingup'>
         <Servicesingup/>
          </Route>
          <Route path='/service'>
         <Service/>
          </Route>
          
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
