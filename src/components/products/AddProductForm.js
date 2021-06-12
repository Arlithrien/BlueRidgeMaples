import {useRef} from 'react';

import classes from './AddProductForm.module.css';
import Card from '../ui/Card';


function AddProductForm(props) {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const instockInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredInstock = instockInputRef.current.value;

    const productData = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      description: enteredDescription,
      instock: enteredInstock
    }

    props.onAddProduct(productData);
    
  }

  return(
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='Title'>Product Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Product Image</label>
          <input type='url' required id='image' height='150' width='150' ref={imageInputRef} />
        </div>
        <div className={classes.price}>
          <label htmlFor='price'>Price</label>
          <input type='text' required id='price' ref={priceInputRef}/>
        </div>
        <div className={classes.instock}>
          <label htmlFor='instock'>Instock</label>
          <input type='checkbox' checked="In Stock" required id='instock' ref={instockInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Publish Product</button>
        </div>
      </form>
    </Card>
  )
}

  export default AddProductForm;