import { useState } from "react";
import ReactSwitch from "react-switch";
import styles from "./ReactionToggle.module.css";

export default function ReactionToggle(props) {
    const setShowReactions = props.setShowReactions;
    const showReactions = props.showReactions;
    const handleChange = (checked) => {
        setShowReactions(checked);
    }
    return (
    <ReactSwitch className={styles.toggle}
        onChange={handleChange} checked={showReactions} onColor="#7777ff" offColor="#424242">
    </ReactSwitch>
    );
}