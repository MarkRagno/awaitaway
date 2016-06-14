
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Locations.scss';
import Link from '../Link';

const title = 'Locations';

class Locations extends Component {

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
          <select name="state" id="state">
            <option value="ri">Rhode Island</option>
          </select>
        </div>
      </div>
    );
  }

}

export default withStyles(Locations, s);
