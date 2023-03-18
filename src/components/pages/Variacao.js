import ApexChart from "react-apexcharts";
import styles from "./Variacao.module.css";

function Variacao(props) {
  debugger;
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
  debugger;
  const series = [
    {
      name: "teste",
      data: props.data,
    },
  ];

  return (
    <div>
      <h1 className={styles.alinha}>Variação de Preços</h1>

      <ApexChart
        options={options}
        series={series}
        type="line"
        width={800}
        heith={380}
      />
    </div>
  );
}

export default Variacao;
