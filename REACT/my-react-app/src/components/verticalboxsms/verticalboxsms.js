import "./verticalboxsms.css"
import { useData } from "../../DataStore";
import "/node_modules/flag-icons/css/flag-icons.min.css";


function Verticalboxsms(){

    const sampledatabox6 = useData();

    return( 
        <div className="verticalboxsms">
            <div className="headingbox6">
                <div>
                    <h3> Industry Analysis</h3>
                    <span>Countries and Sector</span>
                    
                </div>
                <div className="verticaldotbox6">
                    <button className="vertical-dot"> </button>
                </div>
            </div>
            {sampledatabox6.slice(0,6).map((item) =>(
            <div className="data_box6" key={item.id}>

                <div className="itemsbox6">
               
                    <img src="./icon/app.svg" alt=""></img>
                   
                    <div className="itemname">
                        <span>{item.country}</span>
                    </div>
                </div>
                <span className="data"> {item.sector} </span>
            </div>
            ))}

        </div>
    );


}

export default Verticalboxsms;

