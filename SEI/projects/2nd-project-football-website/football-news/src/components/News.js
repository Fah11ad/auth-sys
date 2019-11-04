import React, { Component } from 'react'
import { Card, Container, Row, Col, CardDeck} from 'react-bootstrap'
import axios from 'axios'



export default class News extends Component {
         
    render() {
        return (
            <Container>
                     <Row style={{margin: '24px 24px 24px 24px'}}>       
                    <Col  >
                        <CardDeck >
                            <Card >
                                <Card.Img className="rounded-0" style={{height: '20rem'}} variant="top" src='https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' fluid />
                                <Card.Body style={{ padding: '1.25rem' }}>
                                    <Card.Title >Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                    </Row> 
                     <Row style={{margin: '24px 24px 24px 24px'}}>       
                    <Col lg={6} md={6} sm={12}>
                        <CardDeck  >
                            <Card >
                            <Card.Header  style={{backgroundColor: '#030366', color: '#fff'}} variant="light"><h4>Today's Matches</h4></Card.Header>
                                <Card.Img className="rounded-0" style={{height: '20rem'}} variant="top" src='https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' fluid />
                                <Card.Body style={{ padding: '1.25rem' }}>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                    <Col lg={6} md={6} sm={12} >
                        <CardDeck  >
                            <Card >
                            <Card.Header  style={{backgroundColor: '#030366', color: '#fff'}} variant="light"><h4>Today's Matches</h4></Card.Header>
                                <Card.Img className="rounded-0" style={{height: '20rem'}} variant="top" src='https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' fluid />
                                <Card.Body style={{ padding: '1.25rem' }}>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                    
                    </Row> 
                

            </Container>
           
        )
    }
}
