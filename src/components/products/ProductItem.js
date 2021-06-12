
import classes from './ProductItem.module.css';
import Card from '../ui/Card';

function ProductItem(props){
  return(
    
      <table  cellSpacing='15' className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <section className={classes.content}>
            <h3>{props.title}</h3>
            <price>{props.price}</price>
            <div>{props.instock}</div>
            <p>{props.description}</p>
          </section>
          <section className={classes.actions}>
            <button>Add to cart</button>
          </section>
        </Card>
      </table>
  )
}

export default ProductItem;