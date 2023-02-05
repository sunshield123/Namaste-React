import { useState, useEffect } from "react";
import { restaurantList } from "../contants";
import RestrauntCard from "./RestrauntCard";

function filterData(searchTxt, restaurantList) {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
}

const Body = () => {

  let a = 10; 

  const [searchTxt, setSearchText] = useState("KFC");
  const [restaurants, setRestaurants] = useState(restaurantList);

//   useEffect(() => {
//     getRestaurants();
//   }, [searchTxt]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  }

  console.log("checking what is i am doing")
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Update state setRestaurants
            const data = filterData(searchTxt, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-List">
        {restaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
