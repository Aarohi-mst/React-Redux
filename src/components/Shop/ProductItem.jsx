import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  //SECTION 21(332) APPROACH---------------------------------------------------------------------
  // const cart = useSelector((state) => state.cart);
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    //SECTION 21(332) APPROACH---------------------------------------------------------------------
    // const newTotalQuantity = cart.totalQuantity + 1;
    // const updatedItems = cart.items.slice(); //create copy through slice to avoid mutation
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updatedItem = { ...existingItem }; //new object + copy existing properties
    //   updatedItem.quantity++;
    //   updatedItem.price = updatedItem.price + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }
    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems,
    // };
    // dispatch(cartActions.replaceCart(newCart));

    //SECTION 21(328,333) APPROACH---------------------------------------------------------------------------
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
