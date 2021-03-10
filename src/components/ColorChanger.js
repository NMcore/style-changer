import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    console.log(this.props.allowEdit)
    return (
      <select onChange={(e) => this.props.update(e.target.value)} className="dropDownContainer" disabled={this.props.allowEdit === 'false'}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
