import React, {Component} from 'react';
import {CRow, CCol} from './Grid.js';
import './Timeline.css';

const examples = [
  {
      text: 'In what Joshua Scannel touted as a modern day equivalent of New York’s 17th century lantern laws, the NYPD’s Omnipresence is the use of high-intensity artificial lighting during the night in certain housing projects –  subjecting people to violent illumination by way of artificial light.  Though not as explicit as the lantern laws that were forced upon black bodies, these efforts predominantly affect and target people of color; the demographic who make up the majority of these lower income housing projects.',
      title: 'Omnipresence: New York’s Tactic to Prevent Crime',
      link: {
          url:
              'https://www.newyorker.com/culture/the-new-yorker-documentary/the-controversial-floodlights-illuminating-new-york-citys-public-housing-developments',
          text: 'Source'
      }
  },
  {
      text: 'According to a 2019 study out of the Georgia Institute of Technology, autonomous vehicles are more likely to fail to detect dark skinned pedestrians, and thus be involved in more accidents with them. In their investigation, the authors looked at a large dataset of images that contain pedestrians. They divided up the people using the Fitzpatrick scale, a system for classifying human skin tones from light to dark. Detection was five percentage points less accurate, on average, for the dark-skinned group. That disparity persisted even when researchers controlled for variables like the time of day in images or the occasionally obstructed view of pedestrians.',
      title: 'Self-Driving Cars Fail to Detect Dark-Skinned Pedestrians',
      link: {
          url:
              'https://www.theguardian.com/technology/shortcuts/2019/mar/13/driverless-cars-racist',
          text: 'Source'
      }
  },
  {
      text: 'For years, black passengers at airports across the United States have said Transportation Security Administration agents often pull them aside for so-called “hair pat-downs,” in which agents run their fingers through passengers’ hair, allegedly to look for explosives or other potential security threats. Some say this amounts to racial discrimination by the TSA and that black passengers who wear their hair naturally — or who wear it in styles typically associated with black culture, like braids or dreadlocks — seem to be disproportionately targeted.',
      title: 'How Airport Scanners Discriminate Against Passengers of Color',
      link: {
          url:
              'https://www.vox.com/the-goods/2019/4/17/18412450/tsa-airport-full-body-scanners-racist',
          text: 'Source'
      }
  },
  {
      text: '“I came home from work and was arrested in my driveway in front of my wife and daughters, who watched in tears, because a computer made an error.” In January of 2020, Robert Williams, was wrongfully held in jail for 30 hours, in a case that may be the first known account of an American being wrongfully arrested based on a flawed match from a facial recognition algorithm. According to the lawsuit filed against Detroit police, investigators put a blurry surveillance photo of a man who stole several watches through facial recognition technology. The photo matched Williams’ license, and he was later arrested.',
      title: 'False Face Recognition: Shinola Shoplifting Case',
      link: {
          url:
              'https://www.nytimes.com/2020/06/24/technology/facial-recognition-arrest.html',
          text: 'Source'
      }
  },
  {
      text: 'The U.S. healthcare system uses commercial algorithms to guide health decisions. Obermeyer et al. find evidence of racial bias in one widely used algorithm that allocates health care to patients, which has been systematically discriminating against black people. They concluded that the algorithm was less likely to refer black people than white people who were equally sick to programmes that aim to improve care for patients with complex medical needs. ',
      title: 'Racial Bias in Health-Care Algorithms',
      link: {
          url:
              'https://www.nature.com/articles/d41586-019-03228-6',
          text: 'Source'
      }
  },
  {
      text: 'Platforms like Facebook, YouTube, and Twitter are banking on developing artificial intelligence technology to help stop the spread of hateful speech on their networks. The idea is that complex algorithms that use natural language processing will flag racist or violent speech faster and better than human beings possibly can. But two new studies show that AI trained to identify hate speech may actually end up amplifying racial bias. In one study, researchers found that leading AI models for processing hate speech were one-and-a-half times more likely to flag tweets as offensive or hateful when they were written by African Americans, and 2.2 times more likely to flag tweets written in African American Vernacular English.',
      title: 'Hate Speech Detecting AI Models: Biased Against Black People',
      link: {
          url:
              'https://www.nytimes.com/2020/03/23/technology/speech-recognition-bias-apple-amazon-google.html',
          text: 'Source'
      }
  },
  {
      text: 'Leading speech recognition systems could be flawed because companies are training the technology on data that is not as diverse as it could be — learning their task mostly from white people, and relatively few black people. The companies, it seems, are not training on enough data that represents African-American Vernacular English, according to the researchers. The systems misidentified words about 19 percent of the time with white people. With black people, mistakes jumped to 35 percent. About 2 percent of audio snippets from white people were considered unreadable by these systems, according to the study, which was conducted by researchers at Stanford University. That rose to 20 percent with black people.',
      title: 'Racial Divide in Speech-Recognition Systems',
      link: {
          url:
              'https://www.nytimes.com/2020/03/23/technology/speech-recognition-bias-apple-amazon-google.html',
          text: 'Source'
      }
  }
]

const TimelineElement = ({data}) => (
  <div className="timeline-element">
    <div className="timeline-element-content">
      <time>{data.title}</time>
      <p>{data.text}</p>
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const TimelineComponent = () =>
    examples.length > 0 && (
        <div className="timeline-container">
            {examples.map((data, index) => (
                <TimelineElement data={data} key={index} />
            ))}
        </div>
    );

class Timeline extends Component {

  render() {
    return(
      <CRow>
        <CCol size={1} collapse="xs">
          <TimelineComponent/>
        </CCol>
      </CRow>
    )
  }
}

export default Timeline;
