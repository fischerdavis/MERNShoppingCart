import './ProductScreen.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


// *** How history is obtained.... *** \\
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// // All route props (match, location and history) are available to User
// function User(props) {
//   return <h1>Hello {props.match.params.username}!</h1>;
// }

// ReactDOM.render(
//   <Router>
//     <Route path="/user/:username" component={User} />
//   </Router>,
//   node
// );
// *********************************** \\

const ProductScreen = ({match, history}) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);

    const {loading, error, product} = productDetails;

    useEffect(()=> {
        // if the product id in the param doesn't match the one thats currently set in state, then dispatch a get.
        if(product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    },[dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Price: <span>${product.price}</span>
                            </p>
                            <p>
                                Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                            </p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) =>
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    )}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductScreen
