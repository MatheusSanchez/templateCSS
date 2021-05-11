import './assets/styles/css/style.css';
import './assets/styles/css/normalize.css';

//components 
import Header from './components/header/Header';
import Table from './components/table/Table';
import List from './components/list/List';
import ListDeadGuys from './components/listdeadguys/ListDeadGuys'

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Table />
        <List />
        <ListDeadGuys />
        
      </div>
    </>
  );
}