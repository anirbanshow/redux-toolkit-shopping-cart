import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch();

    const { data: prodcuts, status } = useSelector((state) => state.product);

    useEffect(() => {

        dispatch(fetchProducts());

    }, []);

    const handleAdd = (product) => {
        // store the product in redux store
        dispatch(add(product));
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading...</h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong...</h2>
    }

    return (
        <div className='row'>

            {
                prodcuts.map((product, index) => {
                    return <div className='eachProduct col-md-3 mb-3' key={index}>

                        <div className="card">

                            <div className='eachImg'>
                                <img className="card-img-top"
                                    src={product.image}
                                    alt="Card image cap"
                                />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className='btn btn-primary' onClick={() => handleAdd(product)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>

                    </div>
                })
            }

        </div>
    )
}

export default Products;