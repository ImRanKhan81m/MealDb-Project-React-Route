
import React, { useEffect, useState } from 'react';
import ShopDetails from '../ShopDetails/ShopDetails';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    const searchFood = food => {
        setSearchText(food.target.value);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [searchText])
    return (
        <div className="container">
            <div className="search-container text-center my-5 py-5">
                <h2>Please search your favorite food</h2>
                <input className='w-25' onChange={searchFood} type="text" placeholder='search your favorite food name' /> <button>Search</button>
            </div>
            <div className="product-result-container">
                {
                    products.map(product => <ShopDetails 
                        product={product}
                        key={product.MealId}
                        ></ShopDetails>)
                }
            </div>
        </div>
    );
};

export default Shop;