import Navbar from "../../Component/Navbar";
import HotelFacility from "./HotelFacility";
import "./singleHotelDetail.css";
import EmailAddress from "../../Component/Footer/EmailAddress";
import SingleHotelDetailAvailabilityComponent from "./SingleHotelDetailAvailabilityComponent";
import SingleHotelFilterImageComponent from "./SingleHotelFilterImageComponent";
import { useParams } from "react-router-dom";
import { projectId } from "../../Constant/constant";
import { useEffect } from "react";
import { useState } from "react";

function SingleHotelDetail() {
  const { hotelId } = useParams();
  const [hotelDetail, setHotelDetail] = useState({});
  //console.log(hotelId);

  async function getHotelDetail() {
    try {
      //setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelId}`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );

      const responseJson = await response.json();
      //console.log(responseJson);
      if (responseJson.message === "success") {
        setHotelDetail(responseJson);
        // console.log(hotelListData);
      }
      //console.log(responseJson);
    } catch (error) {
    } finally {
      //setIsLoader(false);
    }
  }
  useEffect(() => {
    getHotelDetail();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="singleHotelDetailContainer">
        <div className="singleHotelDetailTopHeader">
          {`Home > Hotels > All B&Bs > India > ${hotelDetail?.data?.location} > ${hotelDetail?.data?.name}`}
        </div>
        <SingleHotelFilterImageComponent data={hotelDetail?.data} />
        <SingleHotelDetailAvailabilityComponent data={hotelDetail?.data} />
        {/* {facilities} */}
        <HotelFacility data={hotelDetail?.data} />
      </div>
      <EmailAddress />
    </>
  );
}
export default SingleHotelDetail;
