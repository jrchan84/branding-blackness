import React, {Component} from 'react';
import {CRow, CCol} from './Grid.js';
import './Timeline.css';

const examples = [
  {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Source'
      }
  },
  {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Source'
      }
  },
  {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Source'
      }
  },
  {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Source'
      }
  },
  {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Source'
      }
  }
]

const TimelineElement = ({data}) => (
  <div className="timeline-element">
    <div className="timeline-element-content">
      <time>{data.date}</time>
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
