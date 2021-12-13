import React, {Component} from 'react';
import {CRow, CCol} from './Grid.js';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Col, Row, Button } from 'react-bootstrap';


class Footer extends Component {

  render() {
    return(
      <CRow>
        <CCol size={1}>
          <Container className="m-1 p-1" fluid>
            <Row className="footer mx-3 my-3 px-2 py-2 w-90">
              <Col className="text-left m-auto">
                ACAM 320 Multimedia Project
              </Col>
              <Col className="text-center m-auto">
                <p className="m-0 p-0">Created by Justin Chan and Jonathan Gao</p>
              </Col>
              <Col className="text-right m-auto">
                <Button href="https://github.com/jrchan84/brandinig-blackness" target="_blank" rel="noopener noreferrer" variant="outline-secondary" size="sm" className="text-white"><FontAwesomeIcon icon={faGithub} size="lg" className="icon"/>Source Code</Button>
              </Col>
            </Row>
          </Container>
        </CCol>
      </CRow>
    )
  }
}

export default Footer;
