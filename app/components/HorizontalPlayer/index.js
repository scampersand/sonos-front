import React from 'react';
import AlbumArt from 'components/AlbumArt';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import styles from './styles.css';

export default function HorizontalPlayer(props) {
  return (
    <div className={styles.horizontalPlayer}>
      <AlbumArt {...props} small={true} />
      <SongInfo {...props} />
      <PlayControl {...props} />
    </div>
  );
}
