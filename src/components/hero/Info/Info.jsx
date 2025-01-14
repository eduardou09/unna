import styles from "./Info.module.css";

export default function Info() {
  return (
    <article className={styles.info}>
      <div>
        <h2>O investimento perfeito</h2>
        <div>
          <p>
            De um lado, a comodidade e a facilidade de contar com uma completa
            rede de serviços a poucos metros da Universidade Federal de Santa
            Catarina (UFSC). Do outro, a segurança e mobilidade com fácil saída
            para diversas praias e pontos turísticos da cidade.
          </p>
        </div>
      
      </div>
	  <div className={styles.numbers}>
          <div className={styles.skus}>
            <h1>150m</h1>
			<p>da UFSC</p>
          </div>
          <div className={styles.skus}>
            <h1>+4.000</h1>
			<p>novos alunos em 2024</p>
          </div>
          <div className={styles.skus}>
            <h1>R$ 3.250</h1>
			<p>rentabilidade mensal média</p>
          </div>
        </div>
    </article>
  );
}
