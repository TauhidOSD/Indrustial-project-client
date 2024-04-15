// import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import CardText from "./CardText/CardText";
import NewSlider from "./NewSlider/NewSlider";
import Slider from "./Slider/Slider";




const Home = () => {
    return (
       <div>
        <Slider></Slider>
        <NewSlider></NewSlider>
        <CardText></CardText>
       {/* <Banner></Banner> */}
       
       
       <Card></Card>
         

       </div>
    );
};

export default Home;