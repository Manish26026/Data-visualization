import "./topbox.css"


function Topbox() {

    return(
    <div className="topbox">
        <div className="topbox_text">
          <h3> Energy Insights Portal </h3>
          <span className="topboxspan">Fueling Tomorrow: Key Insights </span>
         
          <div className="title">
            <span className="titlebox">Metric Summary</span>
             <div className="title1">
                <div className="title11">
                <span className="titledata"> 10.23 </span>
                <span className="titleinfo"> Intensity </span>
                </div>
                <div className="title12">
                <span className="titledata"> 03.17 </span>
                <span className="titleinfo"> Impact </span>
                </div>
                
            </div>
            <div className="title2">
                <span className="titledata"> 02.72 </span>
                <span className="titleinfo"> Relevance </span>
                <span className="titledata"> 03.16 </span>
                <span className="titleinfo"> Likelihood </span>
                
            </div>

          </div>

        </div>
        <div className="topbox_img">
        <div id="box"></div>

            
        </div>
    </div>
      
    )
}

export default Topbox;