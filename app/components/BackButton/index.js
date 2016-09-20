/**
*
* BackButton
*
*/

import React from 'react';


import styles from './styles.css';

function BackButton(props) {
  return (
    <div className={styles.backButton}>
        <button onClick={props.onClick}>&#9194;</button>
    </div>
  );
}

export default BackButton;
