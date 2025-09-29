import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Eventos from './pages/eventos/Eventos';
import Comunidade from './pages/comunidade/Comunidade';
import Pesquisas from './pages/pesquisas/Pesquisas';
import Informacoes from './pages/informacoes/Informacoes';
import Cadastro from './pages/cadastros/Cadastro';





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/pesquisas" element={<Pesquisas />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;