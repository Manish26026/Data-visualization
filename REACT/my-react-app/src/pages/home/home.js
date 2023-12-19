import "./home.css"
import Topbox from "../../components/topbox/topbox"
import Verticalboxsms from "../../components/verticalboxsms/verticalboxsms"
import Box4com from "../../components/box4com/box4com"
import Box5com from "../../components/box5com/box5com"
import Box10com from "../../components/box10com/box10com"
import Box2com from "../../components/box2com/box2com"
import Box8com from "../../components/box8com/box8com"
import Box7com from "../../components/box7com/box7com"
import Box3com from "../../components/box3com/box3com"






function home()  {
  return (
    <div className="home">
      <div className="col4">
        <div className="box bo1"> <Topbox/></div>
        <div className="box bo2"> <Box2com/></div>
        <div className="box bo3"> <Box3com/></div>
        <div className="box bo4"> <Box4com/></div>
        <div className="box bo5"> <Box5com/></div>

      </div>
   
     
     <div className="col3">
        <div className="box bo6"> <Verticalboxsms/></div>
        <div className="box bo7"> <Box7com/></div>
        <div className="box bo8">  <Box8com/> </div>
        <div className="box bo10"> <Box10com/></div> 
     </div>
     
     

     
    </div>
  );
}

export default home;
