import './list.css';
import michel from '../../assets/images/michel.png'
import branca from '../../assets/images/branca.png'
import neto from '../../assets/images/neto.png'
import diogo from '../../assets/images/diogo.png'
import matheus from '../../assets/images/matheus.png'

import marcela from '../../assets/images/marcela.png'
import claudio from '../../assets/images/claudio.png'
import Button from '../buttons/Buttons'

export default function List() {
  return (
    <ul className="list">
      <li className="list__item">
        <div className="infoTeam">
        <img className="list__img" alt="" src={michel} />
        <p className="list__title">Michelão Brayan</p>
        </div>
        <Button/>
      </li>
      <li className="list__item">
      <div className="infoTeam">
        <img className="list__img" alt="teste" src={marcela} />
        <p className="list__title">Tchella a famosa</p>
      </div>
        <Button/>
      </li>
      <li className="list__item">
      <div className="infoTeam">
        <img className="list__img" alt="" src={claudio} />
        <p className="list__title">Claudio da praça</p>
       </div> 
        <Button/>
      </li>
      <li className="list__item">
      <div className="infoTeam">
        <img className="list__img" alt="" src={diogo} />
        <p className="list__title">Diogo Fumante</p>
      </div>
        <Button/>
      </li>
      <li className="list__item">
      <div className="infoTeam">
        <img className="list__img" alt="" src={branca} />
        <p className="list__title">Clara Loren CavalcantI</p>  
        </div>
        <Button/>
      </li>
      <li className="list__item">
      <div className="infoTeam">
        <img className="list__img" alt="" src={neto} />
        <p className="list__title">Neto de quem ?</p>
        </div>
        <Button/>
      </li>
      <li className="list__item">
      <div className="infoTeam">
        <img className="list__img" alt="" src={matheus} />
        <p className="list__title">Sanchão da massa</p>
        </div>
        <Button/>
      </li>
    </ul>
  )
}