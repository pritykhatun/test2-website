import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from '../src/components/home/Home';
import Navigation from './components/navigation/Navigation';
import AddMenu from './components/addmenu/AddMenu';
import Menu from './components/menu/Menu';
import MenuDetails from './components/menudetails/MenuDetails';
import Login from './components/login/Login';
import Registration from './components/login/Registration';

function App() {
  return (
    <div className="App">
     <Router>
       <Navigation></Navigation>
       <Switch>
         <Route exact path="/">
<Home></Home>
         </Route>
         <Route exact path="/home">
<Home></Home>
         </Route>
         <Route exact path="/addmenu">
<AddMenu></AddMenu>
         </Route>
         <Route exact path="/menu">
           <Menu></Menu>
        </Route>
        <Route exact path="/menudetails/:id">
          <MenuDetails></MenuDetails>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Registration></Registration>
        </Route>
       </Switch>
      
     </Router>
     
    </div>
  );
}

export default App;
