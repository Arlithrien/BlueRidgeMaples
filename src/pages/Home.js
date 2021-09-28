import classes from './Home.modules.css'
import Carousel2 from '../components/ui/Carousel2';
import CarouselData from '../components/ui/CarouselData';





function HomePage() {

  return (


    <section className={classes.homepage}>
      {/*<div className={classes.heroImage}>
        <div className={classes.heroText}> 

        </div>
    </div>
      */}
    
      <Carousel2 slides={CarouselData} />
     
    </section>
  )
}

export default HomePage;