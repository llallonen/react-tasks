import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { About } from './pages/About';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
