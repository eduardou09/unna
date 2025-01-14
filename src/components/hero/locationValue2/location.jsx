import styles from "./locationValue2.module.css";

export default function LocationValue2() {
  return (
    <div className={styles.cards}>
      <div>
        <img src="images/foto-externa-3.jpg" />
        <div className={styles.info}>
          <div className={styles.infoText}>
            <p>Localização</p>
            <a>Rua Conêgo Bernardo, 303 e 315, Trindade</a>
          </div>
          <div>
            <div>
              <p>Opções de planta</p>
              <h4>9</h4>
            </div>
            <div>
              <p>Tipos de planta</p>
              <h4>3</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
