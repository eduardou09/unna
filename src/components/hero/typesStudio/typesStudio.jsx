import { useState } from "react";
import styles from "./typesStudio.module.css";

const types = [
	{
		img: "images/interior-studio.jpg",
		title: "Studio Garden",
		text: "Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização.",
	},
	{
		img: "images/studioC.png",
		title: "Studio",
		text: "Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização.",
	},
	{
		img: "images/coberturaC.png",
		title: "Cobertura",
		text: "Os studios do Unna foram projetados para oferecer o máximo em funcionalidade e conforto em um espaço compacto e moderno. Sua localização estratégica é ideal para estudantes e profissionais, garantindo praticidade e alto potencial de valorização.",
	},
];

export default function TypeStudio() {
	const [count, setCount] = useState(0);

	return (
		<article className={styles.info}>
			<div className={styles.buttonsLine}>
				{types.map((type, i) => (
					<div
						className={`${styles.buttons} ${
							count === i ? styles.active : ""
						}`}
						onClick={() => setCount(i)}
					>
						{type.title}
					</div>
				))}
			</div>

			<img src={types[count].img} alt="interior-studio" srcset="" />

			<div className={styles.information}>
				<div className={styles.informationTexts}>
					<h1>{types[count].title}</h1>
					<p>{types[count].text}</p>
				</div>
				<a
					className={styles.investing}
					href="https://wa.me/5548996744426"
					target="_blank"
					rel="noopener noreferrer"
				>
					Invista já
				</a>
			</div>
		</article>
	);
}
