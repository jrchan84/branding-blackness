import React, {Component} from 'react';
import {CRow, CCol} from './Grid.js';
import { Card } from 'react-bootstrap';
import './Statement.css';

class Statement extends Component {

  render() {
    return(
      <CRow className="statement-row">
        <CCol size={1} className="statement-col">
          <Card className="text-left m-auto w-75 card">
            <Card.Header className="card-header">Project Statement</Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="statement">
                  In what serves as an extension to Simone Browne’s discussion on biometric technology and the surveillance of blackness, this website serves to function as the beginning of a consolidated database of real world examples of how biometrics have adversely affected black individuals, and expand Browne's work into the modern digital era.
                  The centerpiece of the statement is an interactive particle animation of an abstract facial figure.
                  The piece draws inspiration from visual algorithmic patterns in facial recognition and biometric technology.
                  Upon hovering along the outlines, the animation renders focused components surrounding the facial figure, representing algorithmic patterns used in technologies to identify, classify, and subjugate individuals for processing and analysis.
                  <br></br>
                  <br></br>
                  Browne contextualizes the history of biometrics and its relationship with black people by suggesting that the branding of slaves in the Euro-American slave trade is the first example of such biometric technologies, as it was a “measure of slavery’s making, marking, and marketing of the black subject as commodity.”
                  In Simone’s article, she speaks on anthropometry and fingerprint technology as other classifications of biometric measurements, but we aimed to engage in further research in regards to whether or not these technologies have behaved explicit discriminatory tendencies, backed by real world examples.
                  The questions that guided our project were what types of biometrics were common in modern day society, and which of those technologies were inclined to display discriminatory behavior.
                  We identified biometrics as falling into three different categories: physical (facial recognition, voice recognition, fingerprint…), behavioral (online interaction style, typing style…), and chemical (DNA recognition, vein tracing…) In our research, we found that the vast majority of relevant cases were oriented around the use and inaccuracy of facial recognition; the technology that is used by governments, big tech, and numerous other private corporations has been proven to be much less accurate with black faces. We pose this discussion by providing a recent example of how a black man was jailed because of a false match from facial recognition.
                  We also provide examples of racial bias in other technologies, namely voice recognition, online typing style, and others.
                  <br></br>
                  <br></br>
                  These technologies utilize data at face value and their results are commonly misused as objective truths. Unless we eliminate the biases that are already present within these applications and its datasets, we cannot hope that machines will reflect fair and accurate conclusions.
                  When punitive action is so often taken as a direct result of these biometric measurements, it’s essential that we aim to eliminate biases. When the question of whether you qualify of healthcare, can board your flight on time without invasive pat-downs, can express your thoughts online without fear of censorship, or will be sleeping in a jail cell tonight, it is essential that the data that is drawn from these algorithms can act in a non-biased manner and exemplify true and just judgement.
                  <br></br>
                  <br></br>
                  As we move towards becoming a society that is increasingly digitally integrated, it is important to verify the validity of where our data is coming from, especially as we become so reliant on it. Users have to be aware of the “Garbage-In, Gospel-Out” syndrome; if we put our complete faith in computer generated results without questioning the data that’s going in, it can result in harmful results.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-secondary card-footer">Building upon Simone Browne's "Branding Blackness" chapter in "Dark Matters:
            On the Surveillance of Blackness"</Card.Footer>
          </Card>
        </CCol>
      </CRow>
    )
  }
}

export default Statement;
