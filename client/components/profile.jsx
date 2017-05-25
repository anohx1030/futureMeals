import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe';
import Day from './day';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
    }
  }

  render() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayComponents = [];
    for (let i = 0; i < days.length; i += 1) {
      dayComponents.push(<Day username={this.state.username} day={days[i]} />);
    }

    return (
      <div>
        <h1>Profile</h1>
        {dayComponents}
      </div>
    )
  }
}

module.exports = Profile;
