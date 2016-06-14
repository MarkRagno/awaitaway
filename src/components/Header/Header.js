import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.overlay}>
          <div className={s.container}>
            <div className={s.banner}>
              <h1 className={s.bannerTitle}>Await<span className={s.awayAccent}>Away</span></h1>
              <p className={s.bannerDesc}>Less hassle.  Less lines.  <strong>More Convenience.</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
