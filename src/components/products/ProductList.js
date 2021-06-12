import classes from './ProductList.module.css';
import ProductItem from './ProductItem';

function ProductList(props){
  return(
    <grid className={classes.table}>
          {props.products.map(product => (
              
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    instock={product.instock}
                  />
              
            
   
          ))}
    
      
    </grid>
  )
}

export default ProductList;