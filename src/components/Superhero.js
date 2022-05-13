import { Card, Col, Container, Image, Row } from 'react-bootstrap'

import antman from '../assets/img/Superhero/antman.jpg'
import batman from '../assets/img/Superhero/batman.jpg'
import endgame from '../assets/img/Superhero/endgame.jpg'
import spiderman from '../assets/img/Superhero/spiderman.jpg'
import strange from '../assets/img/Superhero/strange.jpg'
import suicide from '../assets/img/Superhero/suicide.jpg'

const Superhero = () => {
    return (
        <div>
            <Container>
                <h1 className='text-center text-white pt-4' id='superhero'>SUPERHERO MOVIES</h1>
                <Row>
                    <Col lg={4} md={4} className='trendingImage text-center mt-4' >
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={antman}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>ANT-MAN</Card.Title>
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
                                src={batman}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>The BATMAN</Card.Title>
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
                                src={endgame}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>AVENGERS END GAME</Card.Title>
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
                                src={spiderman}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>SPIDER-MAN NO WAY HOME</Card.Title>
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
                                src={strange}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>DOCTOR STRANGE </Card.Title>
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
                                src={suicide}
                                alt="Card image"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>SUICIDE SQUAD</Card.Title>
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
export default Superhero;