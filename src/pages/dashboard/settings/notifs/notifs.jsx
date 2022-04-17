import './notifs.scss';

const Notifs = () => {
 return (
     <div className="notifs">
         <div className="cont">
             <p className="titlen">Notifications Alert</p>
             <div className="input">
                 <input type="checkbox" />
                 <label>Display notification</label>
             </div>
             <div className="input">
                 <input type="checkbox" />
                 <label>Sound alert</label>
             </div>
         </div>
     </div>
 )
}

export default Notifs;