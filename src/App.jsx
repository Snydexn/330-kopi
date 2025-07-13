import { Routes, Route } from 'react-router-dom';
import Tentang from './pages/Tentang/Tentang';
import Hero from './pages/Home/Hero';
import Infopromo from './pages/Home/Infopromo';
import Rekomendasi from './pages/Home/Rekomendasi';
import History from './pages/Home/History';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Kopi from './pages/Menu/Kopi';


function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={
          <>
            <Infopromo />
            <Hero />
            <Rekomendasi />
            <History />
          </>
        } />
        <Route path="/home" element={
          <>
            <Infopromo />
            <Hero />
            <Rekomendasi />
            <History />
          </>
        } />
        <Route path="/tentang" element={
          <>
          <Tentang />
          
          </>
          } />
        <Route path="/menu" element={
          <>
          <Kopi />
          
          </>
          } />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
