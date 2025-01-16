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
		// Adicionar o script do Google Tag Manager no head
		const gtmScript = document.createElement("script");
		gtmScript.innerHTML = `
		  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		  })(window,document,'script','dataLayer','GTM-P83DB6H5');
		`;
		document.head.appendChild(gtmScript);

		// Adicionar o iframe do Google Tag Manager no body
		const gtmNoscript = document.createElement("noscript");
		gtmNoscript.innerHTML = `
		  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P83DB6H5"
		  height="0" width="0" style="display:none;visibility:hidden"></iframe>
		`;
		document.body.appendChild(gtmNoscript);

		// Adicionar o script do Meta Pixel no head
		const pixelScript = document.createElement("script");
		pixelScript.innerHTML = `
		  !function(f,b,e,v,n,t,s)
		  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		  n.queue=[];t=b.createElement(e);t.async=!0;
		  t.src=v;s=b.getElementsByTagName(e)[0];
		  s.parentNode.insertBefore(t,s)}(window, document,'script',
		  'https://connect.facebook.net/en_US/fbevents.js');
		  fbq('init', '985467208851663');
		  fbq('track', 'PageView');
		`;
		document.head.appendChild(pixelScript);

		// Adicionar o noscript do Meta Pixel no body
		const pixelNoscript = document.createElement("noscript");
		pixelNoscript.innerHTML = `
		  <img height="1" width="1" style="display:none"
		  src="https://www.facebook.com/tr?id=985467208851663&ev=PageView&noscript=1" />
		`;
		document.body.appendChild(pixelNoscript);
	}, []);

	return (
		<div className={styles.app}>
			<Toaster position="top-center" reverseOrder={false} />
			 <Banner /> 
			<Info />
			<div className={styles.cards2}>
				<LocationValue1 />
				<LocationValue2 />
			</div> 
			 <Infrastructure /> 
			<TypeStudio />
			 <How />
		</div>
	);
}
