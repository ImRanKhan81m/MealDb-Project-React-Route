import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import image from '../image/home-img-2.png'

const Home = () => {
    return (
        <div>

            <section>
                <Container fluid>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <div className='home-details'>
                                <p><span>Our Special Dish</span></p>
                                <h1>Fried Chicken</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique dicta praesentium asperiores.</p>
                                <button >Order Now</button>
                            </div>
                        </Col>
                        <Col className='img-container'>
                            <div>
                                <img className='d-flex align-items-center' src={image} alt="" width={780} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;