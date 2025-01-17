import { useState } from "react";
import styles from "./how.module.css";
import { alertError } from "../../Alert/alert";

const steps = [
	{
		title: "1. Estudo de Mercado e Aquisição do Terreno",
		text: "A administradora localiza o melhor empreendimento para voce e negocia a compra do terreno.",
	},
	{
		title: "2. Construção da SPE",
		text: "Investidores formam uma sociedade (SPE), afim de construir e incorporar o empreendimento imobiliário.",
	},
	{
		title: "3. Captação de recursos",
		text: "Investidores realizam aportes mensais desde o pagamento do terreno até a conclusão da obra, mediante ao custo real dela.",
	},
	{
		title: "4. Execução e Entrega da Obra",
		text: "Matrículas são individualizadas e ocorre a entrega das unidade.",
	},
	{
		title: "5. Encerramento da SPE",
		text: "A sociedade (SPE) é extinta.",
	},
];

export default function How() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	function sendEmal(e) {
		e.preventDefault();

		if (name === "" || email === "" || phone === "") {
			alertError("Preencha todos os dados");
			return;
		} else {
			// Se todos os campos estiverem preenchidos, cria o link do WhatsApp
			const whatsappLink = `https://wa.me/5548996744426?text=Olá.%20Estou%20interessado%20em%20receber%20mais%20informações%20do%20UNNA%20STUDIOS.%20Meu%20nome%20é%20${encodeURIComponent(
				name
			)}%20e%20meu%20email%20é%20${encodeURIComponent(
				email
			)}%20e%20meu%20telefone%20é%20${encodeURIComponent(phone)}.`;

			// Redireciona para o link do WhatsApp
			window.location.href = whatsappLink;
		}
	}
	return (
		<article className={styles.info}>
			<div className={styles.whoFunc}>
				<h2>COMO FUNCIONA UMA SPE?</h2>

				<div>
					<p>
						A Sociedade de Propósito Específico (SPE) é uma
						estrutura jurídica amplamente utilizada no setor
						imobiliário, especialmente em projetos de incorporação.
						Trata-se de uma empresa constituída com o objetivo
						exclusivo de executar um determinado empreendimento, e
						sua existência está diretamente ligada à conclusão do
						projeto. Após a conclusão, a SPE é encerrada.
					</p>
				</div>

				<div className={styles.numbers}>
					{steps.map((step, i) => {
						return (
							<div
								className={
									i === steps.length - 1
										? styles.skusD
										: styles.skus
								}
							>
								<h1>{step.title}</h1>
								<p>{step.text}</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className={styles.container}>
				<img src="images/interior-studio.jpg" alt="bg" />
				<form className={styles.formMain} onSubmit={sendEmal}>
					<div className={styles.input}>
						<label htmlFor="">Nome</label>
						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</div>

					<div className={styles.form}>
						<div className={styles.input}>
							<label htmlFor="">Email</label>
							<input
								type="text"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor="">Celular</label>
							<input
								type="text"
								onChange={(e) => setPhone(e.target.value)}
								value={phone}
							/>
						</div>
					</div>

					<button
						className={styles.investing}
						type="submit"
						value="Enviar"
					>
						Torne-se um investidor
					</button>
				</form>
			</div>
		</article>
	);
}
