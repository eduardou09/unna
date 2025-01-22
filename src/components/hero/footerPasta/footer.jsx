import styles from "./footer.module.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.info}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Redes Sociais */}
        <div className={styles.RedesSociais}>
          <a
           href="https://www.instagram.com/dimensao.imoveis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaInstagram />
          </a>
          <a
           href="https://wa.me/5548996744426?text=Olá.%20Estou%20interessado%20em%20receber%20mais%20informações%20do%20UNNA%20STUDIOS."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
        <div>© {new Date().getFullYear()} Todos os direitos reservados</div>
        {/* Créditos */}
        <p className={styles.nek}>
          Desenvolvido por{" "}
          <a
            href="https://nekdigital.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-blue-400"
          >
            Nek Digital
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
