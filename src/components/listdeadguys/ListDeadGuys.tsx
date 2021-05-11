import './listdeadguys.css';

export default function List() {
  return (
    <ul>
          <li className="list__item">
            <img className="list__img" src="assets/images/" />
            <p className="list__title">Falecido Jair da Massa</p>
            <button className="list__btn">telefone</button>
            <button className="list__btn">Whats</button>
            <button className="list__btn">Slack</button>
          </li>
          <li className="list__item">
            <img className="list__img" src="assets/images/" />
            <p className="list__title">Falecido Paulin da Massa</p>
            <button className="list__btn">telefone</button>
            <button className="list__btn">Whats</button>
            <button className="list__btn">Slack</button>
          </li>
    </ul>
  )
}