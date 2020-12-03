import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
export default class Cards extends Component {
    render() {
        return(
            <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://as2.ftcdn.net/jpg/02/40/22/65/500_F_240226501_wj28H65Bb5uPgDCKNaNjNP76yd27N6pA.jpg" height="300" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://veritaskarte.de/assets/web/images/reload/cash_recharge_post_logo_en.png"  />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://webstockreview.net/images/clipart-telephone-phone-orange-17.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>   
        )
    }
}