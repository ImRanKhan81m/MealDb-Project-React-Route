import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import image from '../Assets/images/home-img-2.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='d-flex align-items-center'>
                            <div className='home-details'>
                                <p><span>Our Special Dish</span></p>
                                <h1>Fried Chicken</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique dicta praesentium asperiores.</p>
                                <button onClick={() => navigate('/shop')}>Order Now</button>
                            </div>
                        </Col>
                        <Col lg='6' className='img-container'>
                            <div>
                                <img src={image} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;