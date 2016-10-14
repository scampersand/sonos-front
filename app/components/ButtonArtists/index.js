import React from 'react';
import Icon from 'react-icons/fa/smile-o';
import styles from './styles.css';

function ButtonArtists(props) {
  return (
    <div className={styles.buttonArtists}>
      <div className={styles.iconBackground}>
        <Icon size={90}/>
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default ButtonArtists;
