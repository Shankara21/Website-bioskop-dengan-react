import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">GOMOVIE</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#superhero">Superhero</Nav.Link>
                    <Nav.Link href="#trending">Trending</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavigationBar