import './assets/styles/css/style.css';
import './assets/styles/css/normalize.css';

//components 
import Header from './components/header/Header';
import Table from './components/table/Table';
import List from './components/list/List';

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Table />
        <List />
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
      </div>
    </>
  );
}