import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTrackInfo } from '../../containers/App/selectors'
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function VerticalPlayer(props) {
  let { album_art } = props.currentTrackInfo.toJS();
  return (
    <div className={styles.verticalPlayer}>
      <img src={album_art}/>
      <SongInfo />
      <PlayControl />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTrackInfo: selectCurrentTrackInfo(),
});

export default connect(mapStateToProps)(VerticalPlayer);
