import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import image from '../Assets/images/home-img-2.png'
import { useNavigate } from 'react-router-dom';
import Shop from '../Shop/Shop';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <section>
                    <Container>
                        <Row>
                            <Col lg='5' className='d-flex align-items-center'>
                                <div className='home-details'>
                                    <p><span>Our Special Dish</span></p>
                                    <h1>Fried Chicken</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique dicta praesentium asperiores.</p>
                                    <button onClick={() => navigate('/shop')}>Shop Now</button>
                                </div>
                            </Col>
                            <Col lg='7' className='img-container'>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            {<Shop></Shop>}
        </>
    );
};

export default Home;