import { useState } from "react";
import styles from "./how.module.css";
import { alertError } from "../../Alert/alert";
import { isMobile } from "react-device-detect";

export default function How() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  function sendEmal (e){
    e.preventDefault()

    if(name === "" || email === "" || phone === "" ){
      alertError("Preencha todos os dados")
      return
    } else {
      // Se todos os campos estiverem preenchidos, cria o link do WhatsApp
      const whatsappLink = `https://wa.me/5548996744426?text=Olá.%20Estou%20interessado%20em%20receber%20mais%20informações%20do%20UNNA%20STUDIOS.%20Meu%20nome%20é%20${encodeURIComponent(name)}%20e%20meu%20email%20é%20${encodeURIComponent(email)}%20e%20meu%20telefone%20é%20${encodeURIComponent(phone)}.`;

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
            A Sociedade de Propósito Específico (SPE) é uma estrutura jurídica
            amplamente utilizada no setor imobiliário, especialmente em projetos
            de incorporação. Trata-se de uma empresa constituída com o objetivo
            exclusivo de executar um determinado empreendimento, e sua
            existência está diretamente ligada à conclusão do projeto. Após a
            conclusão, a SPE é encerrada.
          </p>
        </div>
        <div className={styles.numbers}>
        <div className={styles.skus}>
          <h1>1. Estudo de Mercado e Aquisição do Terreno </h1>
          <p>
            A administradora localiza o melhor empreendimento para voce e
            negocia a compra do terreno.
          </p>
        </div>
        <div className={styles.skus}>
          <h1>2. Construção da SPE </h1>
          <p>
            Investidores formam uma sociedade (SPE), afim de construir e
            incorporar o empreendimento imobiliário.
          </p>
        </div>
        <div className={styles.skus}>
          <h1>3. Captação de recursos</h1>
          <p>
            Investidores realizam aportes mensais desde o pagamento do terreno
            até a conclusão da obra, mediante ao custo real dela.
          </p>
        </div>
        <div className={styles.skus}>
          <h1>4. Execução e Entrega da Obra</h1>
          <p>Matrículas são individualizadas e ocorre a entrega das unidade.</p>
        </div>
        <div className={styles.skusD}>
          <h1>5. Encerramento da SPE</h1>
          <p>A sociedade (SPE) é extinta.</p>
        </div>
      </div>
      </div>

      
      <div className={styles.container}>
       
        <img src="images/interior-studioCama.png" alt="interior-studioCama" />
        <form className={styles.formMain} onSubmit={sendEmal}>
          <div className={styles.input}>
            <label htmlFor="">Nome</label>
            <input type="text" 
             onChange={(e)=> setName(e.target.value)}
             value={name}
            />
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="">Email</label>
              <input type="text"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Celular</label>
              <input type="text"
               onChange={(e)=> setPhone(e.target.value)}
               value={phone}
              />
            </div>
          </div>
          <button className={styles.investing} type="submit" value="Enviar">
            Torne-se um investidor
          </button>
        </form >
      </div>
  
    </article>
  );
}
