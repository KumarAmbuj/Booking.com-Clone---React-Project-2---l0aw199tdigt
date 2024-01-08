import "./heroSection.css";
function HeroSection() {
  return (
    <div className="heroSectionContainer">
      <img src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/296661902.jpeg?k=81d5ab638f6a52308efde9aff4e7f4d468ee89a8db0677723edf0ff76410d6ec&o=" />
      <div className="heroSectionText1">Wanderlust days</div>
      <div className="heroSectionText2">and cozy nights</div>
      <div className="heroSectionText3">
        Choose from cabins, houses and more
      </div>

      <div className="exploreButton">
        <button>Explore holiday rentals</button>
      </div>
    </div>
  );
}
export default HeroSection;
