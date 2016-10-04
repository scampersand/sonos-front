import React from 'react'
import styles from './styles.css';

export default function SongInfo(props) {
  let { title, artist, album } = props.currentTrackInfo;
  return (
    <div className={styles.songInfo}>
      <h2>{title}</h2>
      <span>{artist}</span> - <span>{album}</span>
    </div>
  );
}
