import Banner from "./components/hero/Banner/Banner";
import Info from "./components/hero/Info/Info";

import styles from "./App.module.css";

export default function App() {
	return (
		<div className={styles.app}>
			<Banner />
			<Info />
		</div>
	);
}
