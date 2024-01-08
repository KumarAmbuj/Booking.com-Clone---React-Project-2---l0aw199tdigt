import "./frequentlyAskedQuestions.css";
function FrequentlyAskedQuestions() {
  return (
    <div className="frequentlyContainer">
      <div className="frequentlyContainerHeaderText">
        Frequently asked questions
      </div>

      <div className="frequentlyContents">
        <div className="frequentlyContentsChild">
          <div className="frequentlyContentsBox">
            <div className="frequentlyContentsBoxHeaderText">
              How do I find the cheapest flights on Booking.com?
            </div>
            <div className="frequentlyContentsBoxLightText">
              You can sort flights by price to see them from cheapest to most
              expensive. To find the cheapest flights, you also need to consider
              factors such as when you are booking and when you want to travel.
            </div>
          </div>
          <div className="frequentlyContentsBox">
            <div className="frequentlyContentsBoxHeaderText">
              Do flights get cheaper closer to departure?
            </div>
            <div className="frequentlyContentsBoxLightText">
              Generally, flight prices are more likely to increase the closer
              you get to your flight date.
            </div>
          </div>
        </div>
        <div className="frequentlyContentsChild">
          <div className="frequentlyContentsBox">
            <div className="frequentlyContentsBoxHeaderText">
              Can I book one way flight tickets on Booking.com?
            </div>
            <div className="frequentlyContentsBoxLightText">
              Yes, you can book one way, round trip and multi city flights on
              our site.
            </div>
          </div>
          <div className="frequentlyContentsBox">
            <div className="frequentlyContentsBoxHeaderText">
              What is a flexible ticket?
            </div>
            <div className="frequentlyContentsBoxLightText">
              A flexible ticket allows you to change your flight with the same
              airline company by only paying the fare and tax difference. It can
              only be used for one confirmed change. You are able to add the
              flexible ticket when booking your flight.
            </div>
          </div>
        </div>
        <div className="frequentlyContentsChild">
          <div className="frequentlyContentsBox">
            <div className="frequentlyContentsBoxHeaderText">
              How far in advance can I book a flight?
            </div>
            <div className="frequentlyContentsBoxLightText">
              You can book a flight up to one year before your departure date.
            </div>
          </div>
          <div className="frequentlyContentsBox">
            <div className="frequentlyContentsBoxHeaderText">
              Does Booking.com charge credit card fees?
            </div>
            <div className="frequentlyContentsBoxLightText">
              No, we don't charge any credit card fees. You can always see
              exactly what you’re paying for in the price breakdown when you
              review your booking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
