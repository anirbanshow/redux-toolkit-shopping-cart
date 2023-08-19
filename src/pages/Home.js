import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className='container mt-3'>

            <h2 className='text-center mb-5'>Welcome to Redux Toolkit Store</h2>

            <div className='pb-3'>

                <h5 className='text-center mb-3'>Products</h5>

                <Products />
            </div>

        </div>
    )
}

export default Home;