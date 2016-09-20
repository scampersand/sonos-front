import React from 'react';
import {Icon} from 'react-fa';
import styles from './styles.css';

function BackButton(props) {
  return (
    <div className={styles.backButton}>
        <button onClick={props.onClick}><Icon size="2x" name="backward" /></button>
    </div>
  );
}

export default BackButton;
