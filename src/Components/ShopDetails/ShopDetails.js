import React from 'react';

const ShopDetails = (props) => {
    const {strMealThumb,strMeal, strInstructions } = props.product
    return (
        <div>
            <div>
                <h1>Name:{strMeal}</h1>
            </div>
        </div>
    );
};

export default ShopDetails;