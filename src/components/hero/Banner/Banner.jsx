import { isMobile } from "react-device-detect";
import styles from "./Banner.module.css";

export default function Banner() {
	return (
		<article className={styles.banner}>
			<img src="images/fundo-2.jpg" alt="background" />
			<img src="images/logo_branca.png" alt="logo-unna" />
			<img src="images/unna.png" alt="unna-exterior" />
		</article>
	);
}
