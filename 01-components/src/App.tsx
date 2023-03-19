import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
