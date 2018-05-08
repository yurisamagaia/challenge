import React, { Component } from 'react';
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import JsonPlans from '../data/Plans.json';
import '../App.scss';

class Plans extends Component {
  render() {

    const plans = {
      title: 'Pricing Plans',
      description: 'Loren Ipsum dolor sit amet, pro aeterno adipsci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam nequi cu aliquid nominavi. Est habemus maiestatis ut. Vim quod elitr interesset ea.'
    };

    return (
      <div className="bg-plan text-center">
        <Container>
          <Row>
            <Col md="12">
              <h2>{plans.title}</h2>
              <p className="plan-description">{plans.description}</p>
            </Col>
            {
              JsonPlans.map(({ title, price, cents, features }, i) => {
                return (
                  <Col md="3" className={i === 2 ? 'plan-box-ex' : 'plan-box'} key={i}>
                    <div className="plan-box-price">
                      <h4>{title}</h4>
                      <div>
                        <span className="plan-price-big">{price}</span>
                        <span className="plan-price-small">{cents}</span>
                      </div>
                      <ListGroup className="plan-list">
                        {
                          features.map(({ name }, j) => {
                            return (
                              <ListGroupItem key={j}>{name}</ListGroupItem>
                            );
                          })
                        }
                      </ListGroup>
                      <div className="plan-box-purchase">
                        <Button>PURCHASE</Button>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Plans;
