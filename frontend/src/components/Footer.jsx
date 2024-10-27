import { Container, Row, Col } from "react-bootstrap"

function Footer() {

    const currentYear = new Date().getFullYear()

  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                <p>Greenasaur &copy; {currentYear} All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer