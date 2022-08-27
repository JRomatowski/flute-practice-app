import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from "./routes/Login/Login";
import Initiate from './routes/Initiate/Initiate';
import Session from './routes/Session/Session';
import Review from './routes/Review';
import History from './routes/History/History';
import Contact from './routes/Contact/Contact';
import Title from './components/Title/Title';
// import { useNavigate } from 'react-router-dom'

// This is for testing
// import { Link } from 'react-router-dom'

function App() {

//   const navigate = useNavigate();

//   const contactClick = function() {
//     navigate('/Contact')
// }

// const loginClick = function() {
//     navigate('/')
// }

  return (
    <div className="App">
      {/* Below is for testing purposes */}
      {/* <nav className="test-navbar">
        <Link to="/">Login</Link><br/>
        <Link to="/initiate">Initiate Page</Link><br/>
        <Link to='/session'>Session Page</Link><br/>
        <Link to='/review'>Review Page</Link><br/>
        <Link to='/history'>History Page</Link><br/>
        <Link to='/contact'>Contact Page</Link><br/>
      </nav> */}
      <h1 className='header'>
        <Title />
      </h1>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/initiate' element={<Initiate/>}/>
          <Route path='/session' element={<Session/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      {/* <footer>
            <button onClick={contactClick}>Contact</button><br></br>
            <button onClick={loginClick}>Log Out</button>
      </footer> */}
    </div>
  );
}

export default App;
