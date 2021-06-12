import AddProductForm from '../components/products/AddProductForm';
import {useHistory} from 'react-router-dom';

function AddToCatalogPage() {
  const history=useHistory();

  //Adds a new product to catalog page and database, 
  //then redirects user to home page afterwards
  function addProductHandler(productData){
    fetch(
      'https://nurserytest-42d6b-default-rtdb.firebaseio.com/products.json',
      {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
    
  }

  return (
    <section>
      <h2>Add New Product</h2>
      <AddProductForm onAddProduct={addProductHandler} />

    </section>
    
  )
}

export default AddToCatalogPage;