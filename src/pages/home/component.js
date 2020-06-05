import React from 'react'
import LayoutApp from '../../components/layout/app/'
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap'

import imgContent from '../../static/1.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowItem: 12
    }
    this._toggleRowItem = this._toggleRowItem.bind(this);
  }

  componentDidMount(){
    const {actions} = this.props;
    actions.getData()
  }

  _toggleRowItem = () => {
    if (this.state.rowItem == 12) {
      this.setState({
        rowItem: 6
      })
    }else {
      this.setState({
        rowItem: 12
      })
    }
  }

  render() {
    const data = ["", "", ""]
    const {state} = this.props;
    const {HOME} = state;
    console.log(HOME.karya)
    const toJSON = JSON.stringify(HOME.karya)
    console.log(this.props)
    return (
      <LayoutApp>
        <Container className="my-3">
          <Row className="my-4">
            <Col className="mb-4" xs={12}>
              <Button onClick={this._toggleRowItem} variant="secondary">Go somewhere</Button>
            </Col>
            <Col xs={12} lg={8} >
              <div>
                <Row>
                  {
                    data.map(()=>(
                      <Col xs={12} lg={this.state.rowItem} className="mb-4">
                        <Card>
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              <Image src={imgContent}></Image>
                            </Card.Text>
                            <hr></hr>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <ListGroup>
                <ListGroup.Item action href="#">
                  Beranda
                </ListGroup.Item>
                <ListGroup.Item action href="#profil">
                  Profil
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        {toJSON}
      </LayoutApp>
    )
  }
}

export default Home