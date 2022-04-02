
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShopDetails.css'

const ShopDetails = (props) => {
    const { strMealThumb, idMeal, strMeal, strInstructions } = props.product;
    return (
        <div>
            <CardGroup>
                <Card className='shopDetails'>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title><h3>{strMeal}</h3></Card.Title>
                        <div className='cards'>
                            <Card.Text>
                                {strInstructions.slice(0, 100)}
                            </Card.Text>
                        </div>
                        <div className='buttonSet'>
                            <Link to={`/product-details/${idMeal}`}><Button>See Details</Button></Link>
                            <Button>Add To Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ShopDetails;