import Banner from "../Banner/Banner";
import DressStyle from "../DressStyle/DressStyle";
import NewArrivals from "../NewArrivals/NewArrivals";
import Rating from "./Rating/Rating";
import Tab from "./Tab/Tab";
import TopSelling from "./TopSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mb-12">
        <NewArrivals></NewArrivals>
      </div>
      <div className="mb-12">
        <TopSelling></TopSelling>
      </div>
      <Tab></Tab>
      <div className="mb-12 ">
        <DressStyle></DressStyle>
      </div>

      <div className="mb-12">
        <Rating></Rating>
      </div>
    </div>
  );
};

export default Home;
