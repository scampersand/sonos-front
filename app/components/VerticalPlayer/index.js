import React from 'react'
import AlbumArt from 'components/AlbumArt';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import styles from './styles.css';

export default function VerticalPlayer(props) {
  let { album_art } = props.currentTrackInfo;
  return (
    <div className={styles.verticalPlayer}>
      <AlbumArt album_art={album_art} size="large" />
      <SongInfo {...props} />
      <PlayControl {...props} />
    </div>
  );
}
