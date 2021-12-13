import './App.css';
import logo from './public/logo.png';
import {Grid, Row, Col} from './components/Grid.js';
import ParticlesComponent from './components/Particles.js';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Grid>
          <Row>
            <Col size={2}>
              <Row>
                <Col size={1}>
                  <img src={logo} alt="fingerprint logo" width="20%" height="auto"/>
                </Col>
                <Col size={2}>
                  <p>Branding Blackness</p>
                </Col>
              </Row>
            </Col>
            <Col size={2} collapse="xs">
              <Row>
                <Col size={1}>
                  single
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              <div className="container">
                <ParticlesComponent/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              statement
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              timeline
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              footer
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
