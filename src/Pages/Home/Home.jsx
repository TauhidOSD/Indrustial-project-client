// import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";
import Card from "./Card/Card";
import CardText from "./CardText/CardText";
import NewSlider from "./NewSlider/NewSlider";
import Slider from "./Slider/Slider";




const Home = () => {
    return (
       <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Slider></Slider>
        <NewSlider></NewSlider>
        <CardText></CardText>
       {/* <Banner></Banner> */}
       
       
       <Card></Card>
         

       </div>
    );
};

export default Home;