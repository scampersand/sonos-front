import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { selectCurrentTrackInfo } from '../../containers/App/selectors'
import messages from './messages';
import styles from './styles.css';

function SongInfo(props) {
  let { title, artist, album } = props.currentTrackInfo.toJS();
  return (
    <div className={styles.songInfo}>
      <h2>{title}</h2>
      <span>{artist}</span> - <span>{album}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTrackInfo: selectCurrentTrackInfo(),
});

export default connect(mapStateToProps)(SongInfo);
