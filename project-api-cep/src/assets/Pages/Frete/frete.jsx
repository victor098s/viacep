import { useState } from "react";
import styles from "./frete.module.css";

export default function Frete() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erros, setErros] = useState({});

  const validar = () => {
    let novosErros = {};

    if (!origem) novosErros.origem = "Campo obrigatório";
    if (!destino) novosErros.destino = "Campo obrigatório";

    if (!altura) {
      novosErros.altura = "Campo obrigatório";
    } else if (altura < 1 || altura > 100) {
      novosErros.altura = "Altura deve ser entre 1 e 100 cm";
    }

    if (!largura) {
      novosErros.largura = "Campo obrigatório";
    } else if (largura < 8 || largura > 100) {
      novosErros.largura = "Largura deve ser entre 8 e 100 cm";
    }

    if (!comprimento) {
      novosErros.comprimento = "Campo obrigatório";
    } else if (comprimento < 13 || comprimento > 100) {
      novosErros.comprimento = "Comprimento deve ser entre 13 e 100 cm";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const calcularFrete = () => {
    if (!validar()) return;

    const volume = altura * largura * comprimento;
    const distancia = Math.abs(origem - destino) || 500;

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
            className={erros.origem ? styles.inputErro : ""}
            type="number"
            placeholder="Informe o CEP"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
          {erros.origem && <span className={styles.erro}>{erros.origem}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label>Destino</label>
          <input
            className={erros.destino ? styles.inputErro : ""}
            type="number"
            placeholder="Informe o CEP"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
          {erros.destino && <span className={styles.erro}>{erros.destino}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Altura (A)</label>
          <input
            className={erros.altura ? styles.inputErro : ""}
            type="number"
            placeholder="Entre 1 e 100 cm"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          {erros.altura && <span className={styles.erro}>{erros.altura}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label>Largura (L)</label>
          <input
            className={erros.largura ? styles.inputErro : ""}
            type="number"
            placeholder="Entre 8 e 100 cm"
            value={largura}
            onChange={(e) => setLargura(e.target.value)}
          />
          {erros.largura && <span className={styles.erro}>{erros.largura}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label>Comprimento (C)</label>
          <input
            className={erros.comprimento ? styles.inputErro : ""}
            type="number"
            placeholder="Entre 13 e 100 cm"
            value={comprimento}
            onChange={(e) => setComprimento(e.target.value)}
          />
          {erros.comprimento && (
            <span className={styles.erro}>{erros.comprimento}</span>
          )}
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