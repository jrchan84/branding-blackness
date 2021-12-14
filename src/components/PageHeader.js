import React, {Component} from 'react';
import {CRow, CCol} from './Grid.js';
import './PageHeader.css';

class PageHeader extends Component {

  render() {
    return(
      <CRow>
        <CCol size={1}>
          <div className="header-card">
            <div id="bar">
              <div id="red">
              </div>
            </div>
            <div id="screen">
                <p class="font">slave_1@255.255.255.0:~$</p>
                <p class="font">A creative statement expanding on Simone Browne's work around biometric surveillance of blackness — In the Modern digital era.</p>
                <p class="font">Hover over the interactive multimedia on the right, outlining the biometric characteristics.</p>
                <span class="blinking">I</span>
            </div>
          </div>
        </CCol>
      </CRow>
    )
  }
}

export default PageHeader;
