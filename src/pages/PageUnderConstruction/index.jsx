import Footer from "../../Component/Footer";
import EmailAddress from "../../Component/Footer/EmailAddress";
import Navbar from "../../Component/Navbar";
import "./pageUnderConstruction.css";
function PageUnderConstruction() {
  return (
    <>
      <Navbar />
      <div className="pageConstruction">
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/ukEwfHovjFowhm64R5cRUVzeMvf8rj8pSQlWdS8lh1rbdKfSuoevBFM7Iv9VE5jTx30s2KTDCYMPsy55-Ztk7KT4pKGTXBNhv4V8Np-BW7P7BZ48QArrDGH8htMTrQ3pxjvD6el_ZiOOK8vkbxvYNg" />
        </div>
      </div>
     
      <EmailAddress />
    </>
  );
}
export default PageUnderConstruction;
