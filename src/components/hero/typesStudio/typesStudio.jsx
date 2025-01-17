import { useState } from "react";
import styles from "./typesStudio.module.css";

const types = {
  1 : {
    img : "images/interior-studio.jpg",
    title: "Studio Garden",
    text: "Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização."
  },
  2 : {
    img : "images/studioC.png",
    title: "Studio",
    text: "Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização."
  },
  3 : {
    img : "images/coberturaC.png",
    title: "Cobertura",
    text: "Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização."
  }
}

export default function TypeStudio() {
  const [count, setCount] = useState("1");
  return (
    <article className={styles.info}>
      <div className={styles.buttonsLine}>
        <div
          className={`${styles.buttons} ${count === "1" ? styles.active : ""}`}
          onClick={() => setCount("1")}
        >
          Studio Garden
        </div>
        <div
          className={`${styles.buttons} ${count === "2" ? styles.active : ""}`}
          onClick={() => setCount("2")}
        >
          Studio
        </div>
        <div
          className={`${styles.buttons} ${count === "3" ? styles.active : ""}`}
          onClick={() => setCount("3")}
        >
          Cobertura
        </div>
      </div>
      <div className={styles.aps}>

          <img
            src={types[count].img}
            alt="interior-studio"
            srcset=""
          />
          <div className={styles.information}>
            <h1>{types[count].title}</h1>
            <p>
            {types[count].text}
            </p>
            <a
              href="https://wa.me/5548996744426"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.investing}
            >
              {" "}
              Invista já
            </a>
          </div>
        </div>
    </article>
  );
}
