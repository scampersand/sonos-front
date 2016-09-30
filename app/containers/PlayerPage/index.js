import React from 'react';
import PlayerControl from 'containers/PlayerControl';
import VerticalPlayer from 'components/VerticalPlayer';
import styles from './styles.css';

export default class PlayerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.playerPage}>
        <PlayerControl playerComponent={VerticalPlayer} />
      </div>
    );
  }
}
