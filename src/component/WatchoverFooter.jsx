import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', height: '400px', alignContent: 'center', justifyContent: 'center', paddingLeft: '150px'}}>
      <Container fluid>
        <Row className="text-center text-md-left">
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold fs-3">WatchOver</h5>
            <p className='fs-6'>"WatchOver yourself and the people around you"</p>
          </Col>
          <Col md={6} className="mb-4 mb-md-0">
            <Row>
              <Col md={6} className='d-flex-column ps-5-custom'>
                <h5 className="fw-bold text-start">Navigate</h5>
                <ul className="list-unstyled text-start">
                  <li><a href="#!" style={{ color: '#fff' }}>Home</a></li>
                  <li><a href="#!" style={{ color: '#fff' }}>Community</a></li>
                  <li><a href="#!" style={{ color: '#fff' }}>About</a></li>
                </ul>
              </Col>
              <Col md={6}>
                <h5 className="fw-bold text-start">Contact</h5>
                <ul className="list-unstyled text-start">
                  <li><FaPhone style={{ marginRight: '10px' }} />+0856xxxxxxx</li>
                  <li><FaEnvelope style={{ marginRight: '10px' }} />anonymousx@gmail.com</li>
                  <li><FaMapMarkerAlt style={{ marginRight: '10px' }} />Indonesia</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="text-start">
            <h5 className="fw-bold">Contact</h5>
            <div>
              <a href="#!" style={{ color: '#fff', marginRight: '20px', fontSize: '24px' }}><FaTwitter /></a>
              <a href="#!" style={{ color: '#fff', marginRight: '20px', fontSize: '24px' }}><FaInstagram /></a>
              <a href="#!" style={{ color: '#fff', fontSize: '24px' }}><FaFacebookF /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <p className='fw-bold ps-3-custom'>&copy; 2024 WatchOver, All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
