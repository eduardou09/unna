import styles from "./locationValue2.module.css";

export default function LocationValue2() {
  return (
    <div className={styles.cards}>
      <div>
        <img src="images/foto-externa-3.jpg" />
        <div className={styles.info}>
          <div className={styles.infoText}>
            <p>Localização</p>
            <a  href="https://www.google.com.br/maps/place/R.+Cônego+Bernardo,+303+-+315+-+Trindade,+Florianópolis+-+SC,+88036-570/@-27.59418,-48.5208681,17z/data=!3m1!4b1!4m5!3m4!1s0x952738ff508c001f:0x37a497645ded46cd!8m2!3d-27.5941848!4d-48.5182932?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">Rua Conêgo Bernardo, 303 e 315, Trindade</a>
          </div>
          <div className={styles.options}>
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
