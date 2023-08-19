import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';



const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => {
        return state.cart;
    });

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    return (
        <div className='container mt-3 cartSection'>

            <h2 className='text-center mb-3'>My Cart</h2>

            <table className="table">
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} style={{ width: '80px' }} />
                                </td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart;