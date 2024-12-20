import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodapé";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
      <BrowserRouter>

        <Menu />
        
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />}/>
            <Route path="sobremim" element={<SobreMim />}/>
          </Route>

          <Route path="*" element={<h1>Página não encontrada</h1>}/>
        </Routes>

        <Rodape />

      </BrowserRouter>
  );
}

export default AppRoutes;
