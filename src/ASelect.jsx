import { Select } from "antd";
import React from "react";

export class ASelect extends React.Component {
  state = {
    v: 20
  };

  onChange = v => this.setState({ v });

  render() {
    return (
      <Select
        value={this.state.v}
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={this.onChange}
      >
        {this.props.data.map(x => (
          <Select.Option value={x.id} key={x.id}>
            {x.v}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
