import { useState } from "react";
import styles from "./frete.module.css";

export default function Frete() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularFrete = () => {
    if (!origem || !destino || !altura || !largura || !comprimento) {
      alert("Preencha todos os campos!");
      return;
    }

    // Simulação de cálculo (base + volume + distância fictícia)
    const volume = altura * largura * comprimento;
    const distancia = Math.abs(origem - destino) || 500; // fallback

    const preco = (volume / 5000) + (distancia / 100);

    setResultado(preco.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <h1>Agilize suas postagens no site ou app Correios!</h1>
      <p>E entregue sua encomenda em uma de nossas agências.</p>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Origem</label>
          <input
            type="number"
            placeholder="Informe o CEP"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Destino</label>
          <input
            type="number"
            placeholder="Informe o CEP"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Altura (A)</label>
          <input
            type="number"
            placeholder="Entre 1 e 100 cm"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Largura (L)</label>
          <input
            type="number"
            placeholder="Entre 8 e 100 cm"
            value={largura}
            onChange={(e) => setLargura(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Comprimento (C)</label>
          <input
            type="number"
            placeholder="Entre 13 e 100 cm"
            value={comprimento}
            onChange={(e) => setComprimento(e.target.value)}
          />
        </div>
      </div>

      <button className={styles.button} onClick={calcularFrete}>
        Calcular Frete
      </button>

      {resultado && (
        <div className={styles.resultado}>
          <h2>Frete estimado: R$ {resultado}</h2>
        </div>
      )}
    </div>
  );
}