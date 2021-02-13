import { render } from 'react-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Agenda.module.css';

const Agenda = (props) => {
  const agenda = props.agenda;
  return (
    <VerticalTimeline className={styles.space}>
      {agenda.map((event) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={event.time}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
export default Agenda;
