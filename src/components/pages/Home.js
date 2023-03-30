import styles from "./Home.module.css";
import inflation2 from "../../img/inflacao2.jpg";
import inflation from "../../img/inflacao.png";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1> Bem-vindo ao Portal de Análise de Preços </h1>
      <h1>Pato Branco - PR </h1>
      <p> Verifique os preços dos supermercados de Pato Branco </p>

      <img src={inflation} alt="inflacao" />
      <a href="/">Verificar Preços</a>
    </section>
  );
}

export default Home;
