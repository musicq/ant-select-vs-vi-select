import React from "react";
import { ASelect } from "./ASelect";
import { dataFactory } from "./dataFactory";
import { VISelect } from "./VISelect";

const a = "ANT-SELECT";
const v = "VI-SELECT";

export class App extends React.Component {
  state = {
    use: a,
    data: dataFactory(50),
    length: 50
  };

  onChange = e => {
    const length = +e.target.value;

    this.setState({
      length,
      data: dataFactory(length)
    });
  };

  render() {
    return (
      <div style={{ margin: "0 auto", width: 500 }}>
        <h1>
          Now is <span style={{ color: "#d04141" }}>{this.state.use}</span>
        </h1>

        <div>
          <button
            onClick={() => this.setState({ use: this.state.use === a ? v : a })}
          >
            Toggle Select Type
          </button>

          <br />
          <br />

          <label>
            <h1>Select Data Length</h1>
            <p>
              <input
                type="number"
                value={this.state.length}
                onChange={this.onChange}
              />
            </p>

            <span>Min: 50&nbsp;</span>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={this.state.length}
              onChange={this.onChange}
            />
            <span>&nbsp;Max: 5000</span>
          </label>
        </div>

        <br />

        {this.state.use === a ? (
          <ASelect data={this.state.data} />
        ) : (
          <VISelect data={this.state.data} />
        )}
      </div>
    );
  }
}
