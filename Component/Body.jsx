import { useNavigate } from "react-router";

function Body({ Data, Data2, searchHotel }) {
  const navigate = useNavigate();  // ← ADD THIS LINE

  const handleCardclick = (cityId, cityName) => {
    searchHotel(cityId);
    navigate(`/city/${cityName.toLowerCase().replace(/\s+/g, "-")}`, {
      state: { cityId: cityId }
    });
  };

  return (
    <>
      <div className="BodyContainer">
        <div className="TitleBody">
          <p>Top destinations in India</p>
        </div>
        <div className="BodyCard">
          <div className="wrap-content">
            {Data?.topDomesticDestinations?.map((city) => (
              <div className="card" key={city.cityId}
                onClick={() => handleCardclick(city.cityId, city.cityName)}>
                <div className="cardImage">
                  <img src={"https:" + city.imageUrls.w396h298} />
                </div>
                <div className="City-name">
                  <p>{city.cityName}</p>
                </div>
                <div className="TotalRoom">
                  <p>{city.formattedNoOfHotels + " " + "accommodations"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="BodyContainer2">
        <div className="TitleBody">
          <p>Top Destinations in Malaysia</p>
        </div>
        <div className="BodyCard">
          <div className="wrap-content">
            {Data2?.hotelcards.map((hotel) => (
              <div className="card" key={hotel.hotelId}
                onClick={() => handleCardclick(hotel.hotelId, hotel.name)}>  {/* ← ADD onClick */}
                <div className="cardImage">
                  <img src={"https:" + hotel.imgUrl} />
                </div>
                <div className="City-name">
                  <p>{hotel.name}</p>
                </div>
                <div className="ReviewDiv">
                  <p>{hotel.starRating}+{"⭐"}</p>
                </div>
                <div className="TotalRoom">
                  <p>{hotel.reviewScoreText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;