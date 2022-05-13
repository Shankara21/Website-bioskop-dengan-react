import { Card, Col, Container, Image, Row } from 'react-bootstrap'

import cars from "../assets/img/Trending/cars.jpg"
import kkn from "../assets/img/Trending/kkn.jpg"
import kunti from "../assets/img/Trending/kunti.jpg"
import peaky from "../assets/img/Trending/peaky.jpg"
import sonic from "../assets/img/Trending/sonic.jpg"
import uncharted from "../assets/img/Trending/uncharted.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <h1 className='text-center text-white pt-4' id='trending'>TRENDING MOVIES</h1>
                <Row>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4'>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={cars}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>Cars 3</Card.Title>
                            <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4'>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={kkn}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>kkn</Card.Title>
                            <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4'>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={sonic}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>Sonic</Card.Title>
                            <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4'>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={uncharted}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>Cars 3</Card.Title>
                            <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4'>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={kunti}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>kkn</Card.Title>
                            <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4'>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={peaky}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>Sonic</Card.Title>
                            <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Trending;