import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import IconTwitter from 'react-icons/lib/fa/twitter';
import IconFacebook from 'react-icons/lib/fa/facebook';
import IconPinterest from 'react-icons/lib/fa/pinterest';
import IconGooglePlus from 'react-icons/lib/fa/google-plus';
import IconLinkedin from 'react-icons/lib/fa/linkedin';
import IconYoutuber from 'react-icons/lib/fa/youtube';
import JsonContact from '../data/Contact.json';
import '../App.scss';

class Contact extends Component {
  render() {

    const contact = {
      title: 'Say Hi & Get in Touch',
      description: 'Loren Ipsum dolor sit amet, consectetur elit suspendisse.'
    };

    return (
      <Container className="space-box text-center">
        <Row>
          <Col md="12">
            <h2>{contact.title}</h2>
            <p className="contact-description mg-top-20">{contact.description}</p>
            <Nav className="contact-nav">
              {
                JsonContact.map(({ icon }, i) => {
                  if (icon === 'twitter') return <NavItem key={i} className="contact-item"><IconTwitter className="contact-icons" /></NavItem>
                  if (icon === 'facebook') return <NavItem key={i} className="contact-item"><IconFacebook className="contact-icons" /></NavItem>
                  if (icon === 'pinterest') return <NavItem key={i} className="contact-item"><IconPinterest className="contact-icons" /></NavItem>
                  if (icon === 'google') return <NavItem key={i} className="contact-item"><IconGooglePlus className="contact-icons" /></NavItem>
                  if (icon === 'linkedin') return <NavItem key={i} className="contact-item"><IconLinkedin className="contact-icons" /></NavItem>
                  if (icon === 'youtuber') return <NavItem key={i} className="contact-item"><IconYoutuber className="contact-icons" /></NavItem>
                })
              }
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
