
import React, { useEffect, useState } from 'react';
import ShopDetails from '../ShopDetails/ShopDetails';
import './Shop.css'

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
                <h2>Please Search Your Favorite Food!</h2>
                <input className='w-25' onChange={searchFood} type="text" placeholder='Search Your Favorite Food Name' /> <button>Search</button>
            </div>
            <div className="product-result-container">
                {
                    products.map(product => <ShopDetails 
                        product={product}
                        key={product.idMeal}
                        ></ShopDetails>)
                }
            </div>
        </div>
    );
};

export default Shop;