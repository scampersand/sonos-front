import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { selectCurrentTrackInfo } from '../../containers/App/selectors'
import messages from './messages';
import styles from './styles.css';

function HorizontalPlayer(props) {
  // waiting on refactor from PlayerPage
  // let { title, artist, album, album_art } = props.currentTrackInfo.toJS();
  return (
    <div className={styles.horizontalPlayer}>
      <img src="http://placehold.it/60x60" />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTrackInfo: selectCurrentTrackInfo(),
});

export default connect(mapStateToProps)(HorizontalPlayer);
