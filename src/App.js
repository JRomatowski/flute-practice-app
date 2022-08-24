import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Login from "./components/Login";
import Initiate from './components/Initiate';
import Session from './components/Session';
import Review from './components/Review';
import History from './components/History';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link><br/>
        <Link to="/initiate">Initiate Page</Link><br/>
        <Link to='/session'>Session Page</Link><br/>
        <Link to='/review'>Review Page</Link><br/>
        <Link to='/history'>History Page</Link><br/>
        <Link to='/contact'>Contact Page</Link><br/>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/initiate' element={<Initiate/>}/>
          <Route path='/session' element={<Session/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
