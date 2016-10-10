import React from 'react';
import AlbumArt from 'components/AlbumArt';
import styles from './styles.css';

function ButtonAlbum(props) {
  let { album_art, album, artist } = props.albumInfo;
  return (
    <div className={styles.buttonAlbum}>
      <AlbumArt album_art={album_art} size="medium" />
      <p>{album}</p>
    </div>
  );
}

export default ButtonAlbum;
