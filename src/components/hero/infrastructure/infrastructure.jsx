import styles from "./infrastructure.module.css";

export default function Infrastructure() {
  return (
    <article className={styles.info}>
      <div className={styles.title}>
        <img src="images/Vector.png" alt="Vector" />
        <h2>Infraestrutura completa</h2>
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
       <span>Infraestrutura interna:</span>
        
        <div className={styles.imageContainer}>
          <div className={styles.textOverlay}>Pub pra festas</div>
          <img src="images/interior-festas.jpg" alt="nterior-festas" />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.textOverlayCoworking}>Coworking</div>
          <img src="images/interior-coworking.jpg" alt="nterior-coworking" />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.textOverlayLavanderia}>lavanderia</div>
          <img src="images/interior-lavanderia.jpg" alt="interior-lavanderia" />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.textOverlay}>Mini Mercado</div>
          <img src="images/interior-lavanderia.jpg" alt="interior-lavanderia" />
        </div>
      </div>
      <div className={styles.buttons}>
        <span>Conveniências locais:</span>
        <div className={styles.buttonsReal}>UFSC e Escolas </div>
        <div className={styles.buttonsReal}>Supermercado e Shopping</div>
        <div className={styles.buttonsReal}>Praças e Áreas Verdes</div>
        <div className={styles.buttonsReal}>Hospital Universitários</div>
        <div className={styles.buttonsReal}>Clínicas Médicas</div>
        <div className={styles.buttonsReal}>Pet Shops</div>
        <div className={styles.buttonsReal}>Bares, Padarias e Restaurantes</div>
        <div className={styles.buttonsReal}>Academias</div>
        
      </div>
    </article>
  );
}
