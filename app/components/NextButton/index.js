import React from 'react';
import {Icon} from 'react-fa';
import styles from './styles.css';

function NextButton(props) {
  return (
    <div className={styles.nextButton}>
        <button onClick={props.onClick}><Icon size="2x" name="forward" /></button>
    </div>
  );
}

export default NextButton;
