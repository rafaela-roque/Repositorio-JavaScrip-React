import './ListaProdutos.css'

import produto2 from '../../assets/img/produtos/le_grand_chocolat.png'
import UserProdutos from '../../assets/icones/user.svg'
import StarProdutos from '../../assets/icones/star.svg'
import imgBannerBolos from '../../assets/img/banner_3.png'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'

function ListaProdutos() {
  return (
    <>
      <main>
        <section className="prod_banner" />
        <section className="container prod_container">
          <div className="box_h2">
            <h1>Nossos Bolos</h1>
            <span>Nos Gâteaux</span>
            <hr />
          </div>
          <div className="prod_cards">
          <Card
             imgProdutos={produto2}
             nome={'Le Grand Chocolat'}
             descricao={' Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.'}
             valor={185.0}
             quantidadeAvaliacoes={10}
             nota={9.5}

            />
            
            {/*<article className="prod_card">
              <figure>
                <img
                  src={imgProdutos}
                  alt="foto do produto"
                />
              </figure>
              <h2>
                <Link to="/detProdutos">Le Grand Chocolat</Link>
              </h2>
              <p className="card_desc">
                Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.
              </p>
              <p className="card_rodape">
                <data value={185.0}>R$ 185,00 / kg</data>
                <span className="card_av">
                  <img src={UserProdutos} />
                  <data value={10}>10</data>
                  <img src={StarProdutos} />
                  <data value="9.5">9,5</data>
                </span>
              </p>
            </article>*/}


          </div>
        </section>
      </main>
    </>

  )
}

export default ListaProdutos;
