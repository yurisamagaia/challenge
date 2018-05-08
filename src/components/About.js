import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import IconChevronRight from 'react-icons/lib/fa/chevron-right';
import '../App.scss';

class About extends Component {
  render() {

    const about = {
      title: 'Whats Craze all About?',
      firstDescription: 'Loren Ipsum dolor sit amet, consectetur adpscing elit. Suspendisse fringilla fringilla nisl congue congue Maecenas nec condimentum libero, at elementum mauris.',
      secondDescription: 'Phaselus eget nisi dapibu, ultricies nisl at, hendrerit risusuis ornare luctus id sollicitudin ante lobortis at.',
      firstItem: 'Loren Ipsum dolor sit amet',
      secondItem: 'Loren Ipsum dolor sit amet consectetur elt'
    };

    return (
      <div className="bg-about">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2>{about.title}</h2>
              <p className="about-description mg-top-20">{about.firstDescription}</p>
              <p className="about-description">{about.secondDescription}</p>
              <p className="about-description">
                <IconChevronRight className="about-icons" /> {about.firstItem}
              </p>
              <p className="about-description">
                <IconChevronRight className="about-icons" /> {about.secondItem}
              </p>
            </Col>
            <Col lg="6" md="12" className="text-center about-box-video">
              <div className="about-video">
                <iframe src="https://player.vimeo.com/video/50457458?title=0&byline=0&portrait=0&color=ffffff" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
