
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { strMeal, strCategory, strArea, strInstructions, strTags, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strMeasure1, strMeasure2,strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9 } = product;

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.meals[0]))
    }, [id])

    const navigate = useNavigate();

    return (
        <div className='product-details  bgColor'>
            <div className="container">
                <Row>
                    <Col lg='6'>
                        <div className="image">
                            <img src={product.strMealThumb} alt="" width={'100%'} />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="product-item-details">
                            <div>
                                <h1 className='mb-3'>Name: {strMeal}</h1>
                                <p><b>Category: </b>{strTags}</p>
                                <p><b>Popular: </b>{strArea}</p>
                                <p><b>Tags: </b>{strCategory}</p>
                                <p><b>Instruction: </b>{strInstructions?.slice(0, 500)}.</p>
                                <p><b>Ingredients: </b>{strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}.</p>
                                <p><b>Measure: </b>{strMeasure1}, {strMeasure2}, {strMeasure4}, {strMeasure5}, {strMeasure6}, {strMeasure7}, {strMeasure8}, {strMeasure9}.</p>
                                <div className='item-btn'>
                                    <a target='blank' href={strYoutube}><button>See Tutorial</button></a>
                                    <button onClick={() => navigate('/shop')}>Go Back</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProductDetails;