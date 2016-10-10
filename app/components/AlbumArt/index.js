import React from 'react';
import styles from './styles.css';

export default function AlbumArt(props) {
  return (
    <div>
      <img src={props.album_art} className={styles[props.size]} />
    </div>
  );
}
