import React from 'react';
import styles from './styles.css';

export default function AlbumArt(props) {
  let { album_art } = props.currentTrackInfo;
  let className = props.small ? styles.smallArt : styles.bigArt;
  return (
    <div className={className}>
      <img src={album_art} />
    </div>
  );
}
