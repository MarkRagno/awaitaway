
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/services">Services</Link>
        <Link className={s.link} to="/locations">Locations</Link>
        <Link className={s.link} to="/contact">Contact</Link>
        <Link className={cx(s.link, s.highlight)} to="/waits">Wait Times</Link>
      </div>
    );
  }

}

export default withStyles(Navigation, s);


// <Link className={s.link} to="/login">Log in</Link>
// <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
