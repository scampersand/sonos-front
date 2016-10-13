import React from 'react';
import { connect } from 'react-redux';
import MenuItem from 'components/MenuItem';
import { FormattedMessage } from 'react-intl';
import { selectBrowserMenu } from 'containers/BrowserPage/selectors';
import messages from './messages';
import styles from './styles.css';

export class MusicMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let menuItems = this.props.menu.items.map(({title, path}) => (
      <MenuItem key={path} title={title} />
    ))
    return (
      <div className={styles.musicMenu}>
        {menuItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: selectBrowserMenu(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicMenu);
