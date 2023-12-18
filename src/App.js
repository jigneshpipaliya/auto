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
import View from './Compont/View';
import Loginhome from './Compont/Loginhome';
import Secureuserlogin from './Compont/Secureuserlogin';
import UserLogout from './Compont/UserLogout';
import Secureservicelogin from './Secureservicelogin';

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
          <Secureservicelogin>
         <Service/>
         </Secureservicelogin>
          </Route>
          <Route path='/view/:id'>
          <View/>
          </Route>
          <Route path='/loginhome'>
          <Secureuserlogin>
          <Loginhome/>
          </Secureuserlogin>
          </Route>
          <Route path='/userlogout'>
          <UserLogout/>
          </Route>
         
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
