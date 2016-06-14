
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Services.scss';
import Link from '../Link';

const title = 'Services';

class Services extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <Link className={s.link} to="/services">Notary</Link>
          <Link className={s.link} to="/waits">Wait Times</Link>
          <Link className={s.link} to="/forms">Forms</Link>
        </div>
      </div>
    );
  }

}

export default withStyles(Services, s);
