import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select onChange={(e) => this.props.update(+e.target.value)} className="dropDownContainer" disabled={this.props.allowEdit === 'false'}>
        <option value="12"> 12 </option>
        <option value="24"> 13 </option>
        <option value="64"> 14 </option>
      </select>
    );
  }
}
