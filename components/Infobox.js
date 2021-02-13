import styles from "./Infobox.module.css";

const Infobox = (props) => {
    const info = props.info;
    return (
        <div className={styles.info}>
            <h1>Info:</h1>
            {info.map( line => {return <p>{info}</p>} )}
        </div>
    );
}

export default Infobox;
