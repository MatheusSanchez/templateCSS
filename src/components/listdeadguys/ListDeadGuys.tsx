import './listdeadguys.css';
import jair from '../../assets/images/jair.png'
import paulo from '../../assets/images/paulo.png'
import Button from '../buttons/Buttons'


export default function List() {
  return (
    <ul>
        
          <li className="list__item">
          <div className="infoTeam">
            <img className="list__img" src={jair} />
            <p className="list__title">Falecido Jair da Massa</p>
            </div>
            <Button/>
          
          </li>
          

          <li className="list__item">
          <div className="infoTeam">
            <img className="list__img" src={paulo} />
            <p className="list__title">Falecido Paulin da Massa</p>
           </div>
            <Button/>
          </li>
    </ul>
  )
}