import './tattoo-item.css';
function Tattooitem(props){ 
    
    const { tattoo } = props;
    return (
      
        <div className="tattoo-item">    

        <img src={tattoo.imgurl} />
               
        <h4>{tattoo.title}</h4>
        
        </div>
    );
}

export default Tattooitem;

