import {Container, Row, Col, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">SELAMAT DATANG</div>
                        <div className="title">DI LAZUARDI FILM</div>
                        <div className="text-center mt-4">
                            <Button className="btn-dark">Lihat semua film</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Intro;