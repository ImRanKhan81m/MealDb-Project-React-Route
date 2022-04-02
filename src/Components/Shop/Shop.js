
import React, { useEffect, useState } from 'react';
import ShopDetails from '../ShopDetails/ShopDetails';
import SpinnerDetails from '../Spinner/SpinnerDetails';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);

    const searchFood = food => {
        setSearchText(food.target.value);
    }
    useEffect(() => {
        setLoading(true);
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
        setLoading(false)
    }, [searchText])
    return (
        <>
            {loading ? <SpinnerDetails /> :
                <div className="container">
                    <div className="search-container text-center py-4 mb-3">
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
                </div>}
        </>
    );
};

export default Shop;