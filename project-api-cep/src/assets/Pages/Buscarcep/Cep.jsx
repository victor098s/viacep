import React, { useState } from "react";
import styles from "./Cep.module.css";

const Cep = () => {
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [cep, setCep] = useState("");

  const buscarDados = async (cep) => {
    setLoading(true);
    setErro(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setDados(data);
    } catch (erro) {
      setErro(erro.message);
    } finally {
      setLoading(false);
    }
  };

  function reset() {
    return setDados(""), setErro(null);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Busque o seu CEP</h1>

      <div className={styles.inputSection}>
        <input
          type="number"
          placeholder="Digite o seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          className={styles.btn}
          onClick={() => buscarDados(cep)}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Buscar"}
        </button>
      </div>

      <div className={styles.result}>
        {loading && <em>⌛ Carregando dados...</em>}

        {erro && (
          <>
            <h3>❌ Erro ao buscar o CEP</h3>
            <p>{erro}</p>
          </>
        )}

        {dados && !loading && (
          <>
            <h3>✅ CEP consultado com sucesso</h3>
            <p>
              <span>CEP:</span> {dados.cep}
            </p>
            <p>
              <span>Logradouro:</span> {dados.logradouro}
            </p>
            <p>
              <span>Bairro:</span> {dados.bairro}
            </p>
            <p>
              <span>Localidade:</span> {dados.localidade}
            </p>
            <p>
              <span>Estado:</span> {dados.estado}
            </p>
          </>
        )}
      </div>
      <button className={styles.btnReset} onClick={() => reset()}>
        Limpar
      </button>
    </div>
  );
};

export default Cep;
