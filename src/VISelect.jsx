import React from "react";
import { VSelect } from "vi-select";

export class VISelect extends React.Component {
  state = {
    v: 20
  };

  onChange = v => this.setState({ v });

  render() {
    return (
      <VSelect
        value={this.state.v}
        style={{ width: 200 }}
        placeholder="Select a person"
        keyProp="id"
        displayProp="v"
        onChange={this.onChange}
        dataSource={this.props.data}
      >
        {x => x.v}
      </VSelect>
    );
  }
}
