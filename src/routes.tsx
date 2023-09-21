import Home from './pages/Home';
import Header from './components/header';
import Clientes from './pages/Clientes';
import Contatos from './pages/Contatos';
import Projeto from './pages/Projeto';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/projetos" element={<Projeto />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
