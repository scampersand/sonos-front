import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTrackInfo } from '../../containers/App/selectors'
import AlbumArt from 'components/AlbumArt';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export default function VerticalPlayer(props) {
  return (
    <div className={styles.verticalPlayer}>
      <AlbumArt small={false} />
      <SongInfo />
      <PlayControl />
    </div>
  );
}
