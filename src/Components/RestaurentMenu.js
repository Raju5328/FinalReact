import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../../EPISODE-7/src/utils/useRestaurantMenu";

const RestaurentMenu = () => {
    const {resId} =useParams();
    const resInfo= useRestaurantMenu(resId)

    // let api = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";
    // const {resId} = useParams();
    // console.log(resId);
    // const [resInfo, setresInfo] = useState(null)

      
    // const fetchresData = async () => {
    //     const response = await fetch(api+resId)
    //     const resMenu = await response.json();
    //     console.log(resMenu)
    //     setresInfo(resMenu)
    // }

    // useEffect(() => {
    //     fetchresData();
    //   }, []);

    if (resInfo === null) return <Shimmer/>
    
    
    const {name,cuisines,costForTwo} =resInfo?.data.cards[0]?.card?.card?.info;
    const {itemCards}= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
  
    return (resInfo===null)?<Shimmer/>:(
        <div>           
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{"cost for two : "} {costForTwo/100}</h2>  
         <ul>
             {itemCards.map((each)=><li key={each.card.info.id}>{each.card.info.name}-{" Rs "}
             {(each.card.info.price)/100}</li>)}
         </ul>
 </div>
    )
    
}

export default RestaurentMenu;
