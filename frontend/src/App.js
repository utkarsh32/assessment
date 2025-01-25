import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Product';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
