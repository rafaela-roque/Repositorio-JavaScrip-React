
import { Link } from 'react-router-dom';
import userProdutos from '../../assets/icones/user.svg'
import starProdutos from '../../assets/icones/user.svg'

import './Card.css'

type CardProps = {
    imgProdutos: string;
    nome: string;
    descricao: string;
    valor: number;
    quantidadeAvaliacoes: number;
    nota: number
}



function Card({imgProdutos,
    nome,
    descricao,
    valor,
    quantidadeAvaliacoes,
    nota
} : CardProps) {
    return(
        <article className="prod_card">
        <figure>
          <img
            src={imgProdutos}
            alt="foto do produto"
          />
        </figure>
        <h2>
          <Link to ="/detProdutos">{nome}</Link>
        </h2>                                                     
        <p className="card_desc">
          {descricao}
        </p>
        <p className="card_rodape">
          <data value={valor}>R$ {valor} / kg</data>
          <span className="card_av">
            <img src={userProdutos} />
            <data value={quantidadeAvaliacoes}>{quantidadeAvaliacoes}</data>
            <img src={starProdutos} />
            <data value={nota}>{nota}</data>
          </span>
        </p>
      </article>

    )
}

export default Card;