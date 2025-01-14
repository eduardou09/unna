import Banner from "./components/hero/Banner/Banner";
import Info from "./components/hero/Info/Info";

import styles from "./App.module.css";

import LocationValue1 from "./components/hero/locationValue/location";
import LocationValue2 from "./components/hero/locationValue2/location";
import Infrastructure from "./components/hero/infrastructure/infrastructure";
import TypeStudio from "./components/hero/typesStudio/typesStudio";
import How from "./components/hero/how/how";


export default function App() {
	return (
		<div className={styles.app}>
			<Banner />
			<Info />
			<LocationValue1/>
			<LocationValue2/>
			<Infrastructure/>
			<TypeStudio/>
			<How/>
		</div>
	);
}
