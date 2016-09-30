import React from 'react';
import MusicBrowser from 'components/MusicBrowser';
import HorizontalPlayer from 'components/HorizontalPlayer';
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
