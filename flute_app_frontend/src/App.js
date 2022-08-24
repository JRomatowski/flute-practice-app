import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <header>
        <h1 className='navigation' >
          <Link to="/">home</Link>          
        </h1>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>

    </div>
  );
}

export default App;
