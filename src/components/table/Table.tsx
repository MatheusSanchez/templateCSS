import './table.css';

export default function Table() {
  return (
    <table className="table">
      <tr className="table__item">
        <th className="table__header left">Serviços</th>
        <th className="table__header">Status</th>
        <th className="table__header right">Responsável</th>
      </tr>
      <tr className="table__item">
        <td className="table__content left">IPP</td>
        <td className="table__content">Down</td>
        <td className="table__content right">Claúdio da praça</td>
      </tr>
      <tr className="table__item">
        <td className="table__content left">Storybook</td>
        <td className="table__content">Up do Up</td>
        <td className="table__content right">Michelão Brayaaan</td>
      </tr>
      <tr className="table__item">
        <td className="table__content left">Transactions WebFront</td>
        <td className="table__content">Muito Up</td>
        <td className="table__content right">Clara Lorem CavalcantI</td>
      </tr>
      <tr className="table__item">
        <td className="table__content left">Transactions BFF</td>
        <td className="table__content">Down</td>
        <td className="table__content right">Neto de quem?</td>
      </tr>
      <tr className="table__item">
        <td className="table__content left">Methods WebFront</td>
        <td className="table__content">Muito Up</td>
        <td className="table__content right">Tchella a famosa</td>
      </tr>
      <tr className="table__item">
        <td className="table__content left">Methods BFF</td>
        <td className="table__content">Up do Up</td>
        <td className="table__content right">Matheus Sanchão da Massa</td>
      </tr>
    </table>
  )
}