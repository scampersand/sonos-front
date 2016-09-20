/**
*
* NextButton
*
*/

import React from 'react';


import styles from './styles.css';

function NextButton(props) {
  return (
    <div className={styles.nextButton}>
        <button onClick={props.onClick}>&#9193;</button>
    </div>
  );
}

export default NextButton;
