import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { playMusic, pauseMusic, prevSong, nextSong } from 'containers/App/actions';
import { selectTransportState } from 'containers/App/selectors';

export class PlayerControl extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    playerComponent: React.PropTypes.any,
    onBackClicked: React.PropTypes.func,
    onPlayClicked: React.PropTypes.func,
    onPauseClicked: React.PropTypes.func,
    onNextClicked: React.PropTypes.func,
    transportState: React.PropTypes.string,
    dispatch: React.PropTypes.func,  // from connect()
  };

  render() {
    let Player = this.props.playerComponent;
    return (
      <div>
        <Player {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  transportState: selectTransportState(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPlayClicked: () => dispatch(playMusic()),
    onPauseClicked: () => dispatch(pauseMusic()),
    onBackClicked: () => dispatch(prevSong()),
    onNextClicked: () => dispatch(nextSong()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControl);
