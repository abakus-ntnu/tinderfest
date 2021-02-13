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
    <VerticalTimeline>
      {agenda.map((event) => {
        return (
          //rgb(33, 150, 243)
          <VerticalTimelineElement
            className={styles.verticalTimelineElementWork}
            contentStyle={{
              background: '#ffffff',
              color: '#fff',
              boderTop: '7px solid black',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date={event.time}
            dateClassName={styles.verticalTimelineElementDate}
            iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff',
            }}
          >
            <h3 className={styles.verticalTimelineElementTitle}>
              {event.title}
            </h3>
            <p className={styles.verticalTimelineElementDescription}>
              {event.description}
            </p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
export default Agenda;
