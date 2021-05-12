import mail from '../../assets/mail.svg'
import call from '../../assets/call.svg'
import whats from '../../assets/whats.svg'
import './Buttons.css';


export default function Buttons() {
    return (
      <div>
        <button className="list__btn"><img src={call}/></button>
        <button className="list__btn"><img src={mail}/></button>
        <button className="list__btn"><img src={whats}/></button>
     </div>     
    )
  }