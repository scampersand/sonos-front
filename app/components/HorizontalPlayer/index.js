import React from 'react';
import AlbumArt from 'components/AlbumArt';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import styles from './styles.css';

export default function HorizontalPlayer(props) {
  let { album_art } = props.currentTrackInfo;
  return (
    <div className={styles.horizontalPlayer}>
      <AlbumArt album_art={album_art} size="small" />
      <SongInfo {...props} />
      <PlayControl {...props} />
    </div>
  );
}
