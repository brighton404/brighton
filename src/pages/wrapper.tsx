// work in progress
import { Route, Routes } from 'react-router-dom';
import Header from '@/components/header';
import Homepage from './home/Home';
import About from './about/About';

function Wrapper() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Wrapper;