
import React, { useEffect, useState } from 'react';
import ShopDetails from '../ShopDetails/ShopDetails';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    const searchFood = food => {
        setSearchText(food.target.value);
    }
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    return (
        <div className="container">
            <div className="search-container">
                <h2>Please search your favorite food</h2>
                <input onChange={searchFood} type="text" placeholder='search your favorite food name' /> <button>Search</button>
            </div>
            <div className="product-result-container">
                {
                    products.map(product => <ShopDetails product={product}></ShopDetails>)
                }
            </div>
        </div>
    );
};

export default Shop;