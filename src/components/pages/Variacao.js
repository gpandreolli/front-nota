import ApexChart from "react-apexcharts";
import styles from "./Variacao.module.css";
import Input from "../../components/form/Input";
//import Select from "../../components/form/Select";
import SubmitButton from "../../components/form/SubmitButton";
import { PureComponent, useEffect, useState } from "react";
import { getProdutos } from "../../service/DataService";

import AsyncSelect from "react-select/dist/declarations/src/Async";

function Variacao(props) {
  const [produtos, setProdutos] = useState([]);
  var prodSerch = "";
  state = { selectedProducts: [] };

  onChange = (selectedProducts) => {
    this.state({
      selectedProducts: selectedProducts || [],
    });
  };

  useEffect(() => {
    getProdutos(prodSerch)
      .then((res) => setProdutos(res))
      .catch((err) => alert(err.response ? err.response.data : err.message));
  }, []);

  const options = {
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: props.options,
    },
    yaxis: {
      tooltip: {
        enable: true,
      },
    },
  };

  const series = [
    {
      name: "teste",
      data: props.data,
    },
  ];

  return (
    <div>
      <h1 className={styles.alinha}>Variação de Preços</h1>
      <form className={styles.form}>
        <div>
          <AsyncSelect
            value={this.state.selectedProducts}
            onChange={this.onChange}
            placeholder={"digite o nome do produto"}
            loadOptions={this.loadOptions}
          />

          <p>Informe o período</p>
        </div>
        <div className={styles.container_inputs}>
          <div className={styles.inputs}>
            <Input
              type="date"
              text="Data Inicial"
              name="dtInic"
              placeholder="Data Inicial"
            />
          </div>
          <div className={styles.inputs}>
            <Input
              type="date"
              text="Data Final"
              name="dtFim"
              placeholder="Data Final"
            />
          </div>
        </div>
        <div className={styles.btn}>
          <SubmitButton text="Filtrar" />
        </div>
      </form>

      <ApexChart
        options={options}
        series={series}
        type="line"
        width={800}
        heith={280}
      />
    </div>
  );
}

export default Variacao;
