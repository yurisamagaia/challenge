import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JsonFeatures from '../data/Features.json';
import '../App.scss';

class Features extends Component {
  render() {

    const features = {
      title: 'Creaze Features',
      description: 'Loren Ipsum dolor sit amet, pro aterno adipsci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne. qui cu aliquid nominavi. Est habemus ut. Vim quod elitr interesset ea.'
    };

    return (
      <Container className="space-box">
        <Row>
          <Col md="12" className="text-center">
            <h2>{features.title}</h2>
            <div className="feature-description mg-top-50">{features.description}</div>
          </Col>
          {
            JsonFeatures.map(({ image, title, subtitle }, i) => {
              return (
                <Col lg="4" md="6" className="text-center mg-top-50" key={i}>
                  <img src={require(`../images/${image}.png`)} alt={image} />
                  <h4 className="mg-top-20">{title}</h4>
                  <p className="feature-description mg-top-20">{subtitle}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    );
  }
}

export default Features;
