import { useEffect, useState } from "react";


const useRestaurantMenu = (resId) => {
  let api = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";
  const {resId} = useParams();
  console.log(resId);
  const [resInfo, setresInfo] = useState(null)

  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(api+resId)
    const resMenu = await response.json();
    console.log(resMenu)
    setresInfo(resMenu)
}
  return resInfo;
};

export default useRestaurantMenu;
