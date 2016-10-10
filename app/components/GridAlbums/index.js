import React from 'react';
import ButtonAlbum from 'components/ButtonAlbum';
import styles from './styles.css';

function GridAlbums(props) {
  let { album_art, album, artist } = props.albumInfo;
  return (
    <div className={styles.gridAlbums}>
      <ButtonAlbum {...props} />
    </div>
  );
}

export default GridAlbums;
