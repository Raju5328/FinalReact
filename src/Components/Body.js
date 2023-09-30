import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import "../../index.css";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filtedListRestaurent, setfiltedListRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataSwiggy = await response.json();
    //console.log(dataSwiggy);
    setListOfRestaurant(
      dataSwiggy.data.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    //console.log(dataSwiggy.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfiltedListRestaurent(
      dataSwiggy.data.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(filtedListRestaurent);
  };

  return (
    <div>
      <div className="searchContainer">
        <div className="inputtext">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toUpperCase().includes(searchText.toUpperCase())
            );
            //setListOfRestaurant(filteredRestaurant)
            setfiltedListRestaurent(filteredRestaurant);
            console.log(filteredRestaurant);
          }}
        >
          Search
        </button>
        </div>
        <div className="buttonEln">
          <button onClick={() =>{
            const vegFilter = listOfRestaurant.filter((veg) => veg?.info?.veg==true);
            setfiltedListRestaurent(vegFilter);
          }}>
          Veg Menu
          </button>
          <button
            onClick={() => {
              const filteredList = filtedListRestaurent.filter(
                (resData) => resData?.info?.avgRating >= 4
              );
              setfiltedListRestaurent(filteredList);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className="bodyDiv">
        {
          // listOfRestaurant.map((each) => (
          // <RestaurentCard resData ={each}/>
          filtedListRestaurent.map((each) => (
            <Link to={"/restaurants/"+ each.info.id}><RestaurentCard resData={each} /></Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
