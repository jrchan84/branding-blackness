import React, {Component} from 'react';
import {CRow, CCol} from './Grid.js';
import {Image} from 'react-bootstrap';
import logo from './public/logo.png';
import './PageHeader.css';

class PageHeader extends Component {

  render() {
    return(
      <CRow>
        <CCol size={1}>
          <Image src={logo} className="p-5 mw-100" fluid/>
        </CCol>
      </CRow>
    )
  }
}

export default PageHeader;
