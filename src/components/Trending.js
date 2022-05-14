import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from 'react-bootstrap'


import cars from "../assets/img/Trending/cars.jpg"
// import kkn from "../assets/img/Trending/kkn.jpg"
// import kunti from "../assets/img/Trending/kunti.jpg"
// import peaky from "../assets/img/Trending/peaky.jpg"
// import sonic from "../assets/img/Trending/sonic.jpg"
// import uncharted from "../assets/img/Trending/uncharted.jpg"

import axios from "axios"

const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY,
            }
        }).then((response) => {
            
            setMovies(response.data.results)
        })
    }, [])

    return (
        
         <div>
            <Container>
                <h1 className='text-center text-white pt-4' id='trending'>TRENDING MOVIES</h1>
                <Row>
                    {movies.map((result, index) => {
                        return (
                            <Col lg={4} md={4} sm={4} className='trendingImage text-center mt-4' key={index}>
                        <Card className="bg-dark text-white  rounded">
                            <Image
                                height={450}
                                src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                                alt="Testing"
                                className="rounded"
                            />
                        <div className='bg-dark p-2'>
                            <Card.Title>{ result.title }</Card.Title>
                            <Card.Text className='text-start'>
                                {result.overview}
                                </Card.Text>
                                <Card.Text>
                                    {result.release_date}
                            </Card.Text>
                        </div>
                        </Card>
                    </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default Trending;