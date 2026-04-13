import styles from './Contato.module.css'
import { Search, Megaphone, FileSearch, Headphones, FileText } from 'lucide-react'

function Contato() {
  return (
    <div className={styles.container}>
      
      <h2 className={styles.titulo}>
        Para registrar manifestação de objeto registrado realize uma das ações abaixo:
      </h2>

      <p className={styles.subtitulo}>
        Insira o código do objeto <span>Nacional</span> no campo:
      </p>

      <div className={styles.busca}>
        <input 
          type="text"
          placeholder=""
        />
        <Search size={22} className={styles.iconBusca}/>
      </div>

      <p className={styles.linkPrincipal}>
        Clique <span>aqui</span> para registrar manifestação de objeto 
        <span> Internacional</span> de Importação ou Exportação
      </p>

      <div className={styles.opcoes}>

        <div className={styles.card}>
          <Megaphone size={28}/>
          <p>
            Para registrar Elogio, Dúvida, Sugestão ou 
            Reclamações sobre outros assuntos, clique <span>aqui</span>
          </p>
        </div>

        <div className={styles.card}>
          <FileSearch size={28}/>
          <p>
            Para acompanhar, reativar ou encerrar sua 
            manifestação, clique <span>aqui</span>
          </p>
        </div>

      </div>

      <div className={styles.suporte}>
        <Headphones size={28}/>
        <p>
          Se está com dificuldade para acessar o Meu Correios, 
          clique <span>aqui</span>.
        </p>
      </div>

      <div className={styles.termos}>
        <FileText size={28}/>
        <span>Termo de uso do Fale Conosco</span>
      </div>

    </div>
  )
}

export default Contato