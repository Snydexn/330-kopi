import { Routes, Route } from 'react-router-dom';
import Tentang from './pages/Tentang/Tentang';
import Hero from './pages/Home/Hero';
import Infopromo from './pages/Home/Infopromo';
import Rekomendasi from './pages/Home/Rekomendasi';
import History from './pages/Home/History';
import Navigationbar from './components/Navigationbar';
import GaleriSlider from './pages/Tentang/GaleriSlider';
import Informasi from './pages/Informasi';
import Testimoni from './pages/Testimoni';
import Kontak from './pages/Kontak';
import HalamanMenu from './pages/Menu/HalamanMenu';



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
          <GaleriSlider />
          
          </>
          } />

          <Route path="/menu" element={
          <>
          <HalamanMenu />
          
          </>
          } />

          <Route path="/informasi" element={
          <>
          <Informasi />
          
          </>
          } />

           <Route path="/testimoni" element={
          <>
          <Testimoni />
          
          </>
          } />

          <Route path="/kontak" element={
          <>
          <Kontak />
          
          </>
          } />


      </Routes>
    </>
  );
}

export default App;
