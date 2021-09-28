import ProductList from '../components/products/ProductList';
import {useState, useEffect} from 'react';


function CatalogPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://nurserytest2-4c717-default-rtdb.firebaseio.com/products.json'
    )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const products = [];

      for (const key in data){
        const product = {
          id: key,
          ...data[key]
        };

        products.push(product);
      }
      setIsLoading(false);
      setLoadedProducts(products);
    });
  }, []);

  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
  <section>
    <h1>Our Products</h1>
    <ProductList products={loadedProducts} />
  </section>
  );
}

export default CatalogPage;