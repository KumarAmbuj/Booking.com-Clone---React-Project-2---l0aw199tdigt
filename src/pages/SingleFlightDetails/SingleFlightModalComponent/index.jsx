import "./singleFlightModalComponent.css";
import { useEffect, useState } from "react";
import { FlightCode } from "../../../Constant/constant";

function SingleFlightModalComponent(props) {
  const { id } = props;
  const [singleFlightData, setSingleFlightData] = useState({});
  //console.log(id);
  async function getSinleFlightDetail() {
    try {
      //setIsLoader(true);
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight/${id}`,
        {
          method: "GET",

          headers: {
            projectId: "0f6ipegajht2",
          },
        }
      );
      let resultResponse = await result.json();
      //console.log("hwyyy", resultResponse);

      if (resultResponse.message === "success") {
        //setMessage(resultResponse);
        setSingleFlightData(resultResponse?.data);
        console.log(singleFlightData);
      } else {
        //setMessage(resultResponse);
        //navigate("/register");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      //navigate("/register");
    } finally {
      //setIsLoader(false);
    }
  }
  useEffect(() => {
    getSinleFlightDetail();
  }, []);

  return (
    <div className="flightModalContainer">
      <div className="flightModalContent">
        <div className="flightModalHeaderCrossButton">
          <div className="flightModalHeaderText">Your flight to Goa City</div>
          <div className="flightModalCrossButton" onClick={props.onclick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>

        <div className="flightToHeaderContainer">
          <div className="flightToBoldText">
            Flight to {FlightCode[singleFlightData?.destination]} city
          </div>
          <div className="flightToLightText">
            {singleFlightData?.stops} stop . {singleFlightData?.duration}h 15m
          </div>
        </div>

        <div className="flightFromToTextImageFlex">
          <div>
            <div className="flightFromToText">
              <div className="flightFromToCircle"></div>
              <div className="flightFromToDetail">
                <div
                  className="flightFromToDetailLightText"
                  style={{ marginTop: "-3px" }}
                >
                  sat 20 Jan . {singleFlightData?.departureTime}
                </div>
                <div className="flightFromToDetailBoldText">
                  {singleFlightData?.source} .{" "}
                  {FlightCode[singleFlightData?.source]}
                </div>
              </div>
            </div>
            <div className="flightFromToText" style={{ marginTop: "22px" }}>
              <div className="flightFromToCircle"></div>
              <div className="flightFromToDetail">
                <div
                  className="flightFromToDetailLightText"
                  style={{ marginTop: "-3px" }}
                >
                  sat 20 Jan . {singleFlightData?.arrivalTime}
                </div>
                <div className="flightFromToDetailBoldText">
                  {singleFlightData?.destination} .{" "}
                  {FlightCode[singleFlightData?.destination]}
                </div>
              </div>
            </div>
          </div>
          <div className="flightFromToImage">
            <div>
              <img
                src="https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                style={{ height: "24px", width: "24px" }}
              />
            </div>
            <div className="flightFromToImageText">
              <div>Indigo</div>
              <div>{singleFlightData?.flightID?.slice(0, 5)} . Economy</div>
              <div>Flight time {singleFlightData?.duration}h 15m</div>
            </div>
          </div>
        </div>

        <div
          className="flightFromToTextImageFlex"
          style={{ marginTop: "70px" }}
        >
          <div>
            <div className="flightFromToText">
              <div className="flightFromToCircle"></div>
              <div className="flightFromToDetail">
                <div
                  className="flightFromToDetailLightText"
                  style={{ marginTop: "-3px" }}
                >
                  sat 20 Jan . {singleFlightData?.departureTime}
                </div>
                <div className="flightFromToDetailBoldText">
                  {singleFlightData?.destination} .{" "}
                  {FlightCode[singleFlightData?.destination]}
                </div>
              </div>
            </div>
            <div className="flightFromToText" style={{ marginTop: "22px" }}>
              <div className="flightFromToCircle"></div>
              <div className="flightFromToDetail">
                <div
                  className="flightFromToDetailLightText"
                  style={{ marginTop: "-3px" }}
                >
                  sat 20 Jan . {singleFlightData?.arrivalTime}
                </div>
                <div className="flightFromToDetailBoldText">
                  {singleFlightData?.source} .{" "}
                  {FlightCode[singleFlightData?.source]}
                </div>
              </div>
            </div>
          </div>
          <div className="flightFromToImage">
            <div>
              <img
                src="https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                style={{ height: "24px", width: "24px" }}
              />
            </div>
            <div className="flightFromToImageText">
              <div>Air India</div>
              <div>{singleFlightData?.flightID?.slice(0, 5)} . Economy</div>
              <div>Flight time {singleFlightData?.duration}h 15m</div>
            </div>
          </div>
        </div>

        <div className="modalBorderLine"></div>

        <div className="modalBaggageFlex">
          <div className="modalBaggageInclude">
            <div className="modalBaggageIncludeBoldText">Included baggage</div>
            <div className="modalBaggageIncludeLightText">
              The total baggage included in the price
            </div>
          </div>
          <div className="modalBaggageDetail">
            <div className="modalBaggageDetailFromText">
              Flight to {FlightCode[singleFlightData?.destination]} City
            </div>
            <div className="modalBaggageDetailImageTextFlex">
              <div className="modalBaggageDetailImage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={"25px"}
                  width={"25px"}
                >
                  <path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path>
                </svg>
              </div>
              <div className="modalBaggageDetailText">
                <div style={{ marginTop: "-3px" }}>1 personal item</div>
                <div>Fits under the seat in front of you</div>
              </div>
            </div>

            <div className="modalBaggageDetailImageTextFlex">
              <div className="modalBaggageDetailImage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={"25px"}
                  width={"25px"}
                >
                  <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                </svg>
              </div>
              <div className="modalBaggageDetailText">
                <div style={{ marginTop: "-3px" }}>1 cabin bag</div>
                <div>25 x 35 x 55 cm · Max weight 7 kg</div>
              </div>
            </div>

            <div className="modalBaggageDetailImageTextFlex">
              <div className="modalBaggageDetailImage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={"25px"}
                  width={"25px"}
                >
                  <path d="m 15 9.25 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 13 C 15.745 12.588 15.412 12.255 15 12.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 0 4.5 C 15.745 17.088 15.412 16.755 15 16.75 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 4 -12 v 15 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 6.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -15 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 v 2 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -10 -2.25 h 4.5 V 1.5 h -4.5 z m 8.5 2.25 C 18.245 5.088 17.912 4.755 17.5 4.75 h -11 C 6.088 4.755 5.755 5.088 5.75 5.5 v 15 c 0.005 0.412 0.338 0.745 0.75 0.75 h 11 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                </svg>
              </div>
              <div className="modalBaggageDetailText">
                <div style={{ marginTop: "-3px" }}>1 cabin bag</div>
                <div>25 x 35 x 55 cm · Max weight 7 kg</div>
              </div>
            </div>
          </div>
        </div>

        <div className="geniusContainer">
          <div className="geniusText">
            <div className="geniusTextButton">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 32"
                  height={"35px"}
                  width={"55px"}
                >
                  <g fill="none">
                    <rect
                      width="80"
                      height="32.049"
                      fill="#004cb8"
                      rx="4"
                    ></rect>
                    <path
                      fill="#fff"
                      d="m44.9668352 5.5533056c.216944 0 .339024.090062.3661543.269157l.0058137.082203v6.00384c0 .598784.15488 1.081728.468224 1.446784.311552.365184.752384.546944 1.318784.546944.8360411 0 1.5222034-.3462224 2.0583844-1.0386671l.1210716-.1659409v-6.79296c0-.204512.088396-.320138.2661313-.345849l.0816447-.005511h2.201984c.203392 0 .318388.090062.343959.269157l.005481.082203v9.97056c0 .204512-.089572.318864-.267687.3442565l-.081753.0054395h-1.787008c-.2109806 0-.3651605-.0750446-.4590737-.2251337l-.0419183-.0812983-.26176-.635136c-.290944.26304-.542208.467328-.752256.612736-.210048.147072-.507904.282112-.893568.406656-.385664.12288-.81088.185216-1.275648.185216-1.220608 0-2.186496-.375552-2.8992-1.128448-.6602514-.6974537-1.0146749-1.6397022-1.0619382-2.8224411l-.0054538-.2772069v-6.3552c0-.204512.094864-.320138.283563-.345849l.086613-.005511zm12.803968-.35456c1.773184 0 3.117824.562432 4.033664 1.687424.140112.165088.140476.320866.0022925.4651045l-.0677005.0611035-1.1776 1.095552c-.173824.131456-.34944.108928-.523392-.065792-.624896-.657664-1.358336-.986496-2.201856-.986496-.521728 0-.940032.07616-1.253376.230144-.311552.15232-.468224.361728-.468224.624768 0 .306304.19968.559104.59904.756352.401152.195584 1.057152.375552 1.972992.536576 2.49984.422272 3.749632 1.5264 3.749632 3.309056 0 1.079936-.42176 1.934976-1.263616 2.5632-.843648.628224-1.874816.941568-3.095424.941568-1.265408 0-2.306944-.266624-3.128192-.799616-.821248-.53312-1.39968-1.208064-1.733632-2.026752-.088928-.192304-.049966-.338254.116886-.44128l.079338-.041536 1.656192-.744192c.218624-.102144.37184-.043264.457984.174848.175616.453376.480256.825472.91584 1.117952s.958976.437888 1.570176.437888c.507776 0 .919296-.095232 1.230848-.283776.313344-.190464.468352-.446592.468352-.768512 0-.365184-.203136-.655872-.609408-.875776-.408064-.219776-1.119104-.423936-2.136576-.612608-1.031168-.190336-1.84896-.558976-2.451584-1.107712-.604288-.546816-.9056-1.230464-.9056-2.049152 0-.977792.37888-1.756672 1.134592-2.332928.754048-.576384 1.764608-.865408 3.028352-.865408zm-36.68096 0c1.642496 0 2.928512.507136 3.858176 1.523072.929664 1.014144 1.394432 2.289664 1.394432 3.823104v.700928c0 .233728-.115328.35136-.347648.35136h-7.499392c.160128.671488.476928 1.21152.948608 1.621632.47168.408448 1.07264.612736 1.79904.612736.988288 0 1.742336-.408448 2.265728-1.227136.087808-.131456.225536-.15232.414848-.065664l1.874816.78912c.21696.072704.268544.204288.151552.394624-1.06048 1.79648-2.628864 2.694784-4.706944 2.694784-1.570048 0-2.902528-.526208-4.000896-1.576704-1.096704-1.052288-1.645952-2.397056-1.645952-4.03264 0-1.635456.545792-2.980224 1.635584-4.032512 1.089792-1.050624 2.375808-1.576704 3.858048-1.576704zm-12.376576-5.1987456c2.16 0 4.13952.7363072 5.660544 1.9553792.07296.0590464.118144.1424.125056.232704.010368.0937728-.017408.1840768-.076416.2570112-.388992.4688768-1.19808 1.4448384-1.59744 1.9241344-.059008.0729344-.14592.11808-.239616.1250304-.093824.0069504-.184064-.0243072-.253568-.0833536-.958464-.8127232-2.226048-1.3059072-3.61856-1.3059072-2.976256 0-5.389824 2.3757312-5.389824 5.1542272s2.413568 5.036032 5.389824 5.036032c1.156352 0 2.226048-.340352 3.10464-.92032v-2.250624h-2.54912c-.09024 0-.18048-.034688-.246528-.100736-.062464-.06592-.100736-.152832-.100736-.246528v-2.181248c0-.093696.038272-.180608.100736-.246528.066048-.062592.156288-.100736.246528-.100736h5.025152c.190976 0 .347264.156288.347264.347264v6.307328c0 .208384-.09024.402816-.25344.538368-1.524608 1.219072-3.51104 1.955328-5.674496 1.955328-4.8098688 0-8.7132672-3.646848-8.7132672-8.1376 0-4.4942592 3.9033984-8.2592256 8.7132672-8.2592256zm24.552448 5.1987456c1.220608 0 2.162304.332288 2.823424.996864.6138971.61710629.9427154 1.47006759.9865573 2.56011373l.0050587.25575827v6.793088c0 .2044-.08967.318738-.2677238.3441288l-.0817162.0054392h-2.200192c-.203392 0-.318486-.088788-.3440815-.2674788l-.0054865-.0820892v-6.026368c0-1.315328-.602496-1.972992-1.809408-1.972992-.406272 0-.814336.124672-1.220608.373888-.33856.20618667-.6125867.42801778-.82008.66556741l-.116496.14441659v6.815488c0 .2044-.094864.318738-.2846778.3441288l-.0871622.0054392h-2.179584c-.215376 0-.337162-.088788-.3642433-.2674788l-.0058047-.0820892v-9.970688c0-.2044.094864-.320012.2834773-.34572125l.0865707-.00551075h1.7888c.2109806 0 .3587657.08134531.4422269.24194015l.0363651.08689185.284032.6144c.929664-.818688 1.947136-1.227136 3.050752-1.227136zm7.523712.265216c.216832 0 .337526.090062.3643115.26907125l.0057365.08216075v9.970688c0 .204512-.09359.318766-.2829995.344134l-.0870485.005434h-2.179584c-.216944 0-.337652-.08869-.3644393-.267442l-.0057367-.082126v-9.970688c0-.2044.09359-.320012.2830852-.34572125l.0870908-.00551075zm-19.699584 2.211456c-.63872 0-1.174144.162688-1.602816.49152s-.736896.756352-.926208 1.282432h5.013248c-.101504-.49664-.383872-.917248-.848768-1.259904-.46656-.342656-1.01056-.514048-1.635456-.514048z"
                      transform="translate(9 7)"
                    ></path>
                    <path
                      fill="#febb02"
                      d="m37.6090112 2.1196288c0 .5691264.204288 1.058944.614656 1.4694272.410496.4084992.900224.6147328 1.469312.6147328s1.058816-.2062336 1.469312-.6147328c.408448-.4104832.614656-.9003008.614656-1.4694272s-.206208-1.0589312-.614656-1.4694272c-.410496-.4104832-.900224-.6147328-1.469312-.6147328s-1.058816.2042496-1.469312.6147328c-.410368.410496-.614656.9003008-.614656 1.4694272z"
                      transform="translate(9 7)"
                    ></path>
                  </g>
                </svg>
              </div>

              <div className="tripSaving">Trip savings</div>
            </div>

            <div className="geniusBoldText">
              Unlock Genius members-only deals
            </div>
            <div className="geniusLightText">
              Sign in to get 10% off or more on stays, plus other travel
              rewards.
            </div>
          </div>
          <div className="geniusImage">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/GeniusGiftBoxDiscount.png" />
          </div>
        </div>

        <div className="modalBorderLine"></div>

        <div className="flightModalPriceButton">
          <div className="flightModalPrice">
            <div className="flightModalPriceBoldText">
              INR {singleFlightData?.ticketPrice}
            </div>
            <div className="flightModalPriceLightText">
              Total price for all travellers
            </div>
          </div>
          <div className="flightModalButton">
            <button>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleFlightModalComponent;
