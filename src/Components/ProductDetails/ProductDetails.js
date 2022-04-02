import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.meals[0]))
    }, [id])

    return (
        <div className='product-details  bgColor'>
            <div className="container">
                <Row>
                    <Col lg='6'>
                        <div className="image">
                            <img src={product.strMealThumb} alt="" width={'80%'}/>
                        </div>
                    </Col>
                    <Col lg='6'><h1>Imran</h1></Col>
                </Row>
            </div>
        </div>
    );
};

export default ProductDetails;