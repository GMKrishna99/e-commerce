import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';
import Product from './Product/Product';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

import { BrowserRouter as Router, 
  Route , 
  Routes} from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      {/* Routes */}
        <NavBar/>
        <Router>
         <Routes>
            <Route path='/' element={<ItemList/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
         </Routes>
        </Router>
        <Footer/>
    </div>
  )
}

export default App
