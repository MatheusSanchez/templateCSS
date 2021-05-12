import './assets/styles/css/style.css';
import './assets/styles/css/normalize.css';

//components 
import Header from './components/header/Header';
import Table from './components/table/Table';
import List from './components/list/List';
import Footer from './components/footer/Footer';
import ListDeadGuys from './components/listdeadguys/ListDeadGuys'

export function App() {
  return (
    <>
      <Header />
      <section className="container">
        <Table />
        <List />
        <ListDeadGuys />
      </section>
      <Footer />
    </>
  );
}