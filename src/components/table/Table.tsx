import './table.css';

export default function Table() {
  return (
    <table className="table">
      <tr className="table__item">
        <th>Serviços</th>
        <th>Status</th>
        <th>Responsável</th>
      </tr>
      <tr className="table__item">
        <td>Payment Transactions</td>
        <td>Down</td>
        <td>Claúdio</td>
      </tr>
      <tr className="table__item">
        <td>Storybook</td>
        <td>Down</td>
        <td>Claúdio</td>
      </tr>
      <tr className="table__item">
        <td>Methods BFF</td>
        <td>Down</td>
        <td>Clara Loren CavalcantI</td>
      </tr>
      <tr className="table__item">
        <td>Transactions BFF</td>
        <td>Down</td>
        <td>Claúdio</td>
      </tr>
    </table>
  )
}