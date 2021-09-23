import classes from './Home.modules.css';
import {Carousel} from '3d-react-carousal';
import Carousel2 from '../components/ui/Carousel2';
import CarouselData from '../components/ui/CarouselData';





function HomePage() {
  /*
  let slides = [
    <img  src='https://www.mickeyshannon.com/photos/thunderbird.jpg' alt="1" />,
    <img  src='https://i.imgur.com/OOEoA8C.jpg'  alt="2" />,
    <img  src='https://m.media-amazon.com/images/I/81vOp-qFfiL._AC_SL1500_.jpg' alt="3"/>

  ]; */

  return (


    <section className={classes.homepage}>
      <div className={classes.heroImage}>
        <div className={classes.heroText}>

        </div>
      </div>
    
      <Carousel2 slides={CarouselData} />
      {/*<Carousel slides={slides} autoplay={true} interval={10000} /> */}
     
    </section>
  )
}

export default HomePage;