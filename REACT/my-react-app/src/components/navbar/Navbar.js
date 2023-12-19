import "./Navbar.css"


function Navbar()  {
  return (
    <div className="Navbar">
    
       <div className='search'>
        <img src="/icon/search.svg" alt="" className="seach shado curse"/>
        <span className='searchtext curse'> Search </span>
        <span className='searchicon curse'> ⌘K </span>
       </div>
      
       
       
       <div className='icons'>
       <img src="./icon/translate.svg" alt="" className="langauge shado curse"/>
       <img src="./icon/brightness-high.svg" alt="" className="mode shado curse"/>
       <img src="./icon/grid.svg" alt="" className="apps shado curse"/>
       <div className='notification'>
       <img src="./icon/bell.svg" alt="" className='notif shado curse'/>
       <span className='notificationcount'>2</span> 
       </div>
       
       <img src="./icon/R.jpeg" alt="" className='profile curse'/>

       
       </div>
     
    </div>
  );
}

export default Navbar;
