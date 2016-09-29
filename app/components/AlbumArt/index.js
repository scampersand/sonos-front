import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTrackInfo } from '../../containers/App/selectors'
import styles from './styles.css';

function AlbumArt(props) {
  let { album_art } = props.currentTrackInfo.toJS();
  let className = props.small ? styles.smallArt : styles.bigArt;
  return (
    <div className={className}>
      <img src={album_art} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTrackInfo: selectCurrentTrackInfo(),
});

export default connect(mapStateToProps)(AlbumArt);
