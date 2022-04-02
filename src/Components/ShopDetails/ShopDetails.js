
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './ShopDetails.css'

const ShopDetails = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.product
    return (
        <div>
            <div className='shopDetails'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={strMealThumb} />
                        <Card.Body>
                            <Card.Title>{strMeal}</Card.Title>
                            <div className='cards'>
                                <Card.Text>
                                    {strInstructions.slice(0, 100)}
                                </Card.Text>
                            </div>
                            <div className='btn'>
                             <div><Button variant="primary">See Details</Button></div>
                            <div><Button variant="primary">Add To Cart</Button></div>
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default ShopDetails;