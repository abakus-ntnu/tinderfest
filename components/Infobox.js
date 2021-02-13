import styles from './Infobox.module.css';

const Infobox = (props) => {
  const info = props.info;
  return (
    <div className={styles.info}>
      <h1>Informasjon:</h1>
      {info.map((line) => {
        return <p>{line.text}</p>;
      })}
    </div>
  );
};

export default Infobox;
