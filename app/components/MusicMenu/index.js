import React from 'react';
import { connect } from 'react-redux';
import MenuItem from 'components/MenuItem';
import { FormattedMessage } from 'react-intl';
import { selectBrowserMenu } from 'containers/BrowserPage/selectors';
import { chooseMenuItem } from 'containers/BrowserPage/actions';
import messages from './messages';
import styles from './styles.css';

export class MusicMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    // https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
    let menuItems = this.props.menu.items.map(({title, path}) => (
      <MenuItem key={path} title={title} onClick={() => this.props.onClick(path)} />
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
  onClick: (path) => dispatch(chooseMenuItem(path)),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicMenu);
