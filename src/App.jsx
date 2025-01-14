import Banner from "./components/hero/Banner/Banner";
import Info from "./components/hero/Info/Info";

import styles from "./App.module.css";

import LocationValue1 from "./components/hero/locationValue/location";
import LocationValue2 from "./components/hero/locationValue2/location";
import Infrastructure from "./components/hero/infrastructure/infrastructure";


export default function App() {
	return (
		<div className={styles.app}>
			<Banner />
			<Info />
			<LocationValue1/>
			<LocationValue2/>
			<Infrastructure/>
		</div>
	);
}
