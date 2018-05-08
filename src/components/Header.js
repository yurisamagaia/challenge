import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import ImgCell from '../images/cell.png';
import IconApple from 'react-icons/lib/fa/apple';
import IconAndroid from 'react-icons/lib/fa/android';
import IconWindows from 'react-icons/lib/fa/windows';
import JsonHeader from '../data/Header.json';
import '../App.scss';

class Header extends Component {
  render() {

    const header = {
      title: 'Craze',
      description: 'A great new free psd theme to showcase your new app.'
    };

    return (
      <div className="head">
        <Container>
          <Row>
            <Col md={{ size: 5, offset: 1 }}>
              <h1 className="craze-title">{header.title}</h1>
              <h4 className="craze-subtitle">{header.description}</h4>
              <Nav className="mg-top-20 craze-align">
                {
                  JsonHeader.map(({ icon }, i) => {
                    if (icon === 'apple') return <NavItem key={i} className="nav-icons-head"><IconApple className="icons-head" /></NavItem>
                    if (icon === 'android') return <NavItem key={i} className="nav-icons-head"><IconAndroid className="icons-head" /></NavItem>
                    if (icon === 'windows') return <NavItem key={i} className="nav-icons-head"><IconWindows className="icons-head" /></NavItem>
                  })
                }
              </Nav>
            </Col>
            <Col md="6" className="text-center mg-top-50">
              <img src={ImgCell} className="image-cell" alt="Cellphone" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
