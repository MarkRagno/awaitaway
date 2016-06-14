
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Waits.scss';

const title = 'Current Wait Times';

class Waits extends Component {

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
          <input type="text" name="user_location" placeholder="Enter Zip Code, Address, or City, State"/>
          <select hidden name="closest_office" id="closest-office" placeholder="Please Select">
            <option value="">Cranston DMV (600 New London Avenue, Cranston, RI 02920)</option>
            <option value="">Westerly DMV (45 Broad St, Westerly, RI 02891)</option>
          </select>
        </div>
      </div>
    );
  }

}

export default withStyles(Waits, s);
