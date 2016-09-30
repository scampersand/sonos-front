import React from 'react';
import HorizontalPlayer from 'components/HorizontalPlayer';
import MusicBrowser from 'components/MusicBrowser';
import PlayerControl from 'containers/PlayerControl';
import styles from './styles.css';

export default class BrowserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.browserPage}>
        <MusicBrowser />
        <PlayerControl playerComponent={HorizontalPlayer} />
      </div>
    );
  }
}
