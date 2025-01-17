import styles from "./Info.module.css";

export default function Info() {
  return (
    <article className={styles.info}>
      <div className={styles.investing1}>
        <h2>O investimento perfeito</h2>
        <div className={styles.text}>
          <p>
            De um lado, a comodidade e a facilidade de contar com uma completa
            rede de serviços a poucos metros da Universidade Federal de Santa
            Catarina (UFSC). Do outro, a segurança e mobilidade com fácil saída
            para diversas praias e pontos turísticos da cidade.
          </p>
          <a href="https://wa.me/5548996744426" target="_blank" rel="noopener noreferrer"><button type="button">Invista já</button></a> 
        </div>
 
      </div>
	  <div className={styles.numbers}>
          <div className={styles.skus}>
            <h1>150m</h1>
			<p>da UFSC</p>
          </div>
          <div className={styles.barra}></div>
          <div className={styles.skus}>
            <h1>+4.000</h1>
			<p>novos alunos em 2024</p>
          </div>
          <div className={styles.barra}></div>
          <div className={styles.skusE}>
            <div className={styles.rs}>
            <div className={styles.rsSpan}>R$</div><h1> 3.250</h1>
            </div>
            
			<p>rentabilidade mensal média</p>
          </div>
          <a href="https://wa.me/5548996744426" target="_blank" rel="noopener noreferrer" className={styles.investing}>  Invista já</a>
        </div>
    </article>
  );
}
