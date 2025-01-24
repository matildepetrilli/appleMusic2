import { Container, Row, Col, Card } from "react-bootstrap";
const MusicCard = function () {
  return (
    <>
      <Container fluid>
        <Row className="d-flex">
          <Col xs={2}>
            <Card>
              <Card.Img variant="top" src="./src/assets/images/2a.png" />
              <Card.Body>
                <Card.Title>Card </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Img variant="top" src="./src/assets/images/2b.png" />
              <Card.Body>
                <Card.Title>Card </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Img variant="top" src="./src/assets/images/2c.png" />
              <Card.Body>
                <Card.Title>Card </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Img variant="top" src="./src/assets/images/2d.png" />
              <Card.Body>
                <Card.Title>Card </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Img variant="top" src="./src/assets/images/2e.png" />
              <Card.Body>
                <Card.Title>Card </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="xs-d-none" >
            <Card>
              <Card.Img variant="top" src="./src/assets/images/2f.png" />
              <Card.Body>
                <Card.Title>Card</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MusicCard;
