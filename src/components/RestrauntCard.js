import { IMG_CDN_URL } from "../contants";

const RestrauntCard = ({ name, cloudinaryImageId, cuisines, totalRatings }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{totalRatings} Stars</h4>
    </div>
  );
};

export default RestrauntCard;
