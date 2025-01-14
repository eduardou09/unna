import { useState } from "react";
import styles from "./typesStudio.module.css";

export default function TypeStudio() {
  const [count, setCount] = useState("1");
  return (
    <article className={styles.info}>
      <div className={styles.buttonsLine}>
        <div   className={`${styles.buttons} ${count === "1" ? styles.active : ""}`}  onClick={() => setCount("1")}>
          Studio Garden
        </div>
        <div className={`${styles.buttons} ${count === "2" ? styles.active : ""}`}  onClick={() => setCount("2")}>
          Studio
        </div>
        <div className={`${styles.buttons} ${count === "3" ? styles.active : ""}`} onClick={() => setCount("3")}>
          Cobertura
        </div>
      </div>
      {count === "1" && 
      <div className={styles.aps}>
        <img src="images/interior-studio.jpg" alt="interior-studio" srcset="" />
        <h1>Studio Garden</h1>
        <p>Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização.</p>
        <button className={styles.investing}>Invista já</button>
        </div> }
        {count === "2" && 
      <div className={styles.aps}>
        <img src="images/studioC.png" alt="interior-studio" srcset="" />
        <h1>Studio</h1>
        <p>Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização.</p>
        <button className={styles.investing}>Invista já</button>
        </div> }
        {count === "3" && 
      <div className={styles.aps}>
        <img src="images/coberturaC.png" alt="interior-studio" srcset="" />
        <h1>Cobertura</h1>
        <p>Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização.</p>
        <button className={styles.investing}>Invista já</button>
        </div> }
    </article>
  );
}
