import{Container, Navbar, Nav,Form,}from 'react-bootstrap'

const MusicNavbar = function(){
return(
   
<>
<Navbar bg="dark" data-bs-theme="dark" expand="mg">
      <Container fluid>

        <Navbar.Toggle
          aria-controls="navbarScroll" 
          className="border-0"
        >
          <span className="navbar-toggler-icon toggler-red"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto">
            <Form><i className="bi bi-search text-danger"></i>
            <Form.Control
          type="search"
          placeholder="Search"
          className=" text-light"
          aria-label="Search"
          
        /> 
            </Form>
            
          <Nav.Link href=""><i className="bi bi-house-door text-danger"></i>Home</Nav.Link>
        <Nav.Link href=""><i className="bi bi-grid text-danger"></i>Novità</Nav.Link>
        <Nav.Link href=""><i className="bi bi-broadcast text-danger"></i>Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#home" className="ms-auto">
      <img
        src="./src/assets/logos/music.svg"
        width="70"
        height="70"
        className="d-inline-block align-top img-white"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>


        <Navbar.Brand className="ms-auto text-danger" href="#home">
          Accedi
        </Navbar.Brand>
      </Container>
    </Navbar>


            </>
)
}

export default MusicNavbar