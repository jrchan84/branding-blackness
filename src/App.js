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
      <CGrid>
        <CRow>
          <CCol size={1}>
            <PageHeader/>
          </CCol>
          <CCol size={2} collapse="xs">
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
    </div>
  );
}

export default App;
