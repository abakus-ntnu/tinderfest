import styles from "./Lines.module.css";

const Lines = (props) => {
    const lines = props.lines;
    console.log(lines);
    return (
        <div className={styles.lines}>
            <h1>Innsendte sjekkereplikker:</h1>
            {lines.map( line => {return <p>{line}</p>} )}
        </div>
    );
}

export default Lines;
