import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

class Component extends React.Component {

  constructor() {
    super();
    this.state = {
      scrollY: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    this.setState({scrollY: window.scrollY})
  }

  render() {
    return (
      <div>
        <Navbar className="py-4" sticky="top" collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="/">StayHome</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Category</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Sign up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Component;