import "./Menu.css";
import { Link } from "react-router-dom";
import Menudata from "../../data.js";

function Menu() {
  return (
    <div className="Menu">
      {/* <div className="logotop"> */}
        <div className="logotop1">
          <img src="./icon/logo.png" alt="" className="logo" />
          <span className="logoname">Vuexy</span>
          <input type="radio" className="rbutton" name="feature" value="enabled"></input>
        </div>
          {/* </div> */}

        <div className="items0">
            <div className="logotop2 curse">
               <span className="dashborad ">Dashboard</span>
            </div>
      
      

      {Menudata.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listitem.map((listitem) => (
            <Link to={listitem.url} key={listitem.id} className="listitembox">
              
              <img src={listitem.im} alt="" className="image" />
              <span className="listitem">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Menu;
