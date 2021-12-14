import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from './components/PageHeader.js';
import Timeline from './components/Timeline.js';
import Statement from './components/Statement.js';
import Footer from './components/Footer.js';
import ParticlesComponent from './components/ParticlesComponent.js';
import {CGrid, CRow, CCol} from './components/Grid.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <CRow>
        <CCol size={1} collapse="xs">
          <div id="overlay-t"></div>
        </CCol>
      </CRow>
      <CGrid>
        <CRow>
          <CCol size={1}>
            <div className="hero">
              <PageHeader/>
            </div>
          </CCol>
          <CCol size={1} collapse="xs">
            <ParticlesComponent/>
          </CCol>
        </CRow>
        <CRow>
          <CCol size={1} collapse="xs">
            <div className="arrow bounce">
              <FontAwesomeIcon icon={faArrowDown} className="icon" size="lg"/>
            </div>
          </CCol>
        </CRow>
        <Statement/>
        <Timeline/>
        <Footer/>
      </CGrid>
      <CRow>
        <CCol size={1} collapse="xs">
          <div id="overlay-b"></div>
        </CCol>
      </CRow>
    </div>
  );
}

export default App;
