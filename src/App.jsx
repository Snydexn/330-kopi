import { Routes, Route } from 'react-router-dom';
import Tentang from './pages/Tentang/Tentang';
import Hero from './pages/Home/Hero';
import Infopromo from './pages/Home/Infopromo';
import Rekomendasi from './pages/Home/Rekomendasi';
import History from './pages/Home/History';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import GaleriSlider from './pages/Tentang/GaleriSlider';
import MenuKopi from './pages/Menu/MenuKopi';
import MenuNonKopi from './pages/Menu/MenuNonKopi';
import MenuMakanan from './pages/Menu/MenuMakanan';
import Informasi from './pages/Informasi';
import Testimoni from './pages/Testimoni';



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
          <MenuKopi />
          <MenuNonKopi />
          <MenuMakanan />
          
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


      </Routes>
      <Footer />
    </>
  );
}

export default App;
