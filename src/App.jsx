import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';
import Product from './Product/Product';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import SignUp from './components/Pages/Signup/SignUp';
import SignIn from './components/Pages/SignIn/SignIn';

import { BrowserRouter as Router, 
  Route , 
  Switch,
  Link,
} from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemList/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/product/:id">
              <Product/>
            </Route>    
         </Switch>
      </Router>
        <Footer/>
    </div>
  )
}

export default App
