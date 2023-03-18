import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/Home";
import ListaCompra from "../pages/ListaCompra";
import Variacao from "../pages/Variacao";
import Container from "./Container";

import { getDados, getDataEmissao } from "../../service/DataService";
import styles from "./Navbar.module.css";

function Navbar() {
  const [data, setData] = useState([]);
  const [dadosy, setDadosy] = useState([]);

  useEffect(() => {
    getDados("Pao Frances")
      .then((res) => setData(res))
      .catch((err) => alert(err.response ? err.response.data : err.message));
  }, []);

  useEffect(() => {
    getDataEmissao("Pao Frances")
      .then((res) => setDadosy(res))
      .catch((err) => alert(err.response ? err.response.data : err.message));
  }, []);

  return (
    <Router>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/variacao">Variação de Preços</Link>
          </li>
          <li className={styles.item}>
            <Link to="/listaCompra">Lista de Compras</Link>
          </li>
        </ul>
      </nav>

      <Container customClass="minH">
        <Routes>
          <Route exact path="/home" caseSensitive={false} element={<Home />} />
          <Route
            path="/variacao"
            caseSensitive={false}
            element={<Variacao data={data} options={dadosy} />}
          />
          <Route
            path="/listaCompra"
            caseSensitive={false}
            element={<ListaCompra />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default Navbar;
