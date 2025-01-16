import Banner from "./components/hero/Banner/Banner";
import Info from "./components/hero/Info/Info";

import styles from "./App.module.css";

import LocationValue1 from "./components/hero/locationValue/location";
import LocationValue2 from "./components/hero/locationValue2/location";
import Infrastructure from "./components/hero/infrastructure/infrastructure";
import TypeStudio from "./components/hero/typesStudio/typesStudio";
import How from "./components/hero/how/how";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";


export default function App() {
	useEffect(() => {
		// Adicionar o script no head
		const script = document.createElement("script");
		script.innerHTML = `
		  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		  })(window,document,'script','dataLayer','GTM-P83DB6H5');
		`;
		document.head.appendChild(script);
	
		// Adicionar o iframe no body
		const noscript = document.createElement("noscript");
		noscript.innerHTML = `
		  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P83DB6H5"
		  height="0" width="0" style="display:none;visibility:hidden"></iframe>
		`;
		document.body.appendChild(noscript);
	  }, []);
	
	return (
		<div className={styles.app}>
			   <Toaster
                position="top-center"
                reverseOrder={false}
            />
			<Banner />
			<Info />
			<div className={styles.cards2}>
			<LocationValue1/>
			<LocationValue2/>
			</div>
			
			<Infrastructure/>
			<TypeStudio/>
			<How/>
		</div>
	);
}
