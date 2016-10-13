import React from 'react';
import { connect } from 'react-redux';
import HorizontalPlayer from 'components/HorizontalPlayer';
import MusicBrowser from 'components/MusicBrowser';
import PlayerControl from 'containers/PlayerControl';
import { browserPageLoaded } from './actions';
import styles from './styles.css';

class BrowserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.dispatch(browserPageLoaded())
  }

  render() {
    return (
      <div className={styles.browserPage}>
        <MusicBrowser />
        <PlayerControl playerComponent={HorizontalPlayer} />
      </div>
    );
  }
}

export default connect()(BrowserPage);
