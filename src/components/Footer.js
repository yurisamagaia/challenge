import React, { Component } from 'react';
import { Container, Nav, NavItem, Row, Col } from 'reactstrap';
import JsonFooter from '../data/Footer.json';
import '../App.scss';

class Footer extends Component {
  render() {
    return (
      <div className="bg-footer text-center">
        <Container>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <Row>
                {
                  JsonFooter.map(({ name }, i) => {
                    return (
                      <Col md="2" xs="12" key={i}>
                        <p className="footer-item">{name}</p>
                      </Col>
                    );
                  })
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
