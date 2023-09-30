

const RestaurentCard = (props)=>{
   const {resData} = props;
   const {cloudinaryImageId,name,avgRating,cuisines,costForTwo} = resData?.info;
   //console.log(resData);
   return(
    
        <div className="resCard">
            <img className="imgcard" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{avgRating}</h2>
            <h2>{costForTwo}</h2>
        </div>
   )
}

export default RestaurentCard;