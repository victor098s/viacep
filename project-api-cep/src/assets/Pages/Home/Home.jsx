import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Bem-vindo ao Correios!</h1>
        <p>Facilitando o envio de encomendas para todo o Brasil</p>
      </header>

      {/* Seção Frete */}
      <section className={styles.card}>
        <h2> Cálculo de Frete</h2>
        <p>
          Calcule o valor do envio informando origem, destino e dimensões do
          pacote. Nosso sistema simula valores de entrega de forma rápida.
        </p>
      </section>

      {/* Seção CEP */}
      <section className={styles.card}>
        <h2>Consulta de CEP</h2>
        <p>
          Informe o CEP para encontrar endereço completo, cidade e estado.
          Ideal para preencher dados de envio corretamente.
        </p>
      </section>

      {/* Seção Contato */}
      <section className={styles.card}>
        <h2>Atendimento:</h2>
        <p>Segunda a Sexta: 08h às 18h</p>
        <p>Sábado: 08h às 12h</p>
        <p>Domingos e feriados: não há atendimento</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© Copyright 2026 Correios</p>
      </footer>
    </div>
  );
}