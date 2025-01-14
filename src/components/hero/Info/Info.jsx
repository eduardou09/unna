import styles from "./Info.module.css";

export default function Info() {
	return (
		<article className={styles.info}>
			<div>
				<h2>O investimento perfeito</h2>
				<div>
					<p>
						De um lado, a comodidade e a facilidade de contar com
						uma completa rede de serviços a poucos metros da
						Universidade Federal de Santa Catarina (UFSC). Do outro,
						a segurança e mobilidade com fácil saída para diversas
						praias e pontos turísticos da cidade.
					</p>
					<button>Invista já</button>
				</div>
			</div>
		</article>
	);
}
