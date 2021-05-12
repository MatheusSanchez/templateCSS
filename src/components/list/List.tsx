import './list.css';

export default function List() {
  return (
    <ul className="list">
      <li className="list__item">
        <img className="list__img" alt="" src="assets/images/michel.png" />
        <p className="list__title">Michelão Brayan</p>
        <button className="list__btn">telefone</button>
        <button className="list__btn">Whats</button>
        <button className="list__btn">Slack</button>
      </li>
      <li className="list__item">
        <img className="list__img" alt="teste" src="assets/images/marcela.png" />
        <p className="list__title">Tchella a famosa</p>
        <button className="list__btn">telefone</button>
        <button className="list__btn">Whats</button>
        <button className="list__btn">Slack</button>
      </li>
      <li className="list__item">
        <img className="list__img" alt="" src="assets/images/claudio.png" />
        <p className="list__title">Claudio da praça</p>
        <button className="list__btn">telefone</button>
        <button className="list__btn">Whats</button>
        <button className="list__btn">Slack</button>
      </li>
      <li className="list__item">
        <img className="list__img" alt="" src="assets/images/diogo.png" />
        <p className="list__title">Diogo Fumante</p>
        <button className="list__btn">telefone</button>
        <button className="list__btn">Whats</button>
        <button className="list__btn">Slack</button>
      </li>
      <li className="list__item">
        <img className="list__img" alt="" src="assets/images/branca.jpg" />
        <p className="list__title">Clara Loren CavalcantI</p>  
        <button>telefone</button>
        <button>Whats</button>
        <button>Slack</button>
      </li>
      <li className="list__item">
        <img className="list__img" alt="" src="assets/images/neto.png" />
        <p className="list__title">Neto de quem ?</p>
        <button className="list__btn">telefone</button>
        <button className="list__btn">Whats</button>
        <button className="list__btn">Slack</button>
      </li>
      <li className="list__item">
        <img className="list__img" alt="" src="assets/images/matheus.jpg" />
        <p className="list__title">Matheus Sanchão da massa</p>
        <button className="list__btn">telefone</button>
        <button className="list__btn">Whats</button>
        <button className="list__btn">Slack</button>
      </li>
    </ul>
  )
}