import styles from "./locationValue.module.css";

export default function LocationValue1() {
  return (
    <div className={styles.cards}>
      <div>
        <img src="images/imagem-externa-2.jpg" />
        <div className={styles.info}>
          <div  className={styles.infoText}>
            <p>Valor investido</p>
            <h4>R$360.000</h4>
          </div>
          <div>
          <p>Valor de mercado na entrega</p>
            <h4>R$560.000</h4>
          </div>
          <div>
          <p>Valor investido</p>
            <h4>R$360.000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
