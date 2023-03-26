import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

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
