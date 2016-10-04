import React from 'react'
import AlbumArt from 'components/AlbumArt';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import styles from './styles.css';

export default function VerticalPlayer(props) {
  return (
    <div className={styles.verticalPlayer}>
      <AlbumArt {...props} small={false} />
      <SongInfo {...props} />
      <PlayControl {...props} />
    </div>
  );
}
