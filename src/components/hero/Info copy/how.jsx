import styles from "./how.module.css";

export default function How() {
  return (
    <article className={styles.info}>
      <div>
        <h2>COMO FUNCIONA UMA SPE?</h2>
        <div>
          <p>
            A Sociedade de Propósito Específico (SPE) é uma estrutura jurídica
            amplamente utilizada no setor imobiliário, especialmente em projetos
            de incorporação. Trata-se de uma empresa constituída com o objetivo
            exclusivo de executar um determinado empreendimento, e sua
            existência está diretamente ligada à conclusão do projeto. Após a
            conclusão, a SPE é encerrada.
          </p>
        </div>
      </div>
      <div className={styles.numbers}>
        <div className={styles.skus}>
          <h1>1. Estudo de Mercado e Aquisição do Terreno </h1>
          <p>
            A administradora localiza o melhor empreendimento para voce e
            negocia a compra do terreno.
          </p>
        </div>
        <div className={styles.skus}>
          <h1>2. Construção da SPE </h1>
          <p>
            Investidores formam uma sociedade (SPE), afim de construir e
            incorporar o empreendimento imobiliário.
          </p>
        </div>
        <div className={styles.skus}>
          <h1>3. Captação de recursos</h1>
          <p>
            Investidores realizam aportes mensais desde o pagamento do terreno
            até a conclusão da obra, mediante ao custo real dela.
          </p>
        </div>
        <div className={styles.skus}>
          <h1>4. Execução e Entrega da Obra</h1>
          <p>Matrículas são individualizadas e ocorre a entrega das unidade.</p>
        </div>
        <div className={styles.skusD}>
          <h1>5. Encerramento da SPE</h1>
          <p>A sociedade (SPE) é extinta.</p>
        </div>
      </div>

      <div className={styles.container}>
        <img src="images/interior-studioCama.png" alt="interior-studioCama" />
        <div className={styles.formMain}>
          <div className={styles.input}>
            <label htmlFor="">Nome</label>
            <input type="text" />
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Celular</label>
              <input type="text" />
            </div>
          </div>
          <button className={styles.investing}>
            Torne-se um investidor
          </button>
        </div>
      </div>
    </article>
  );
}
