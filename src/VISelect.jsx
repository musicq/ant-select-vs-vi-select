import React from "react";
import { VSelect } from "vi-select";
import { dataFactory } from "./dataFactory";

export class VISelect extends React.Component {
  state = {
    v: 20
  };

  data = dataFactory(50);

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
        dataSource={this.data}
      >
        {x => x.v}
      </VSelect>
    );
  }
}
