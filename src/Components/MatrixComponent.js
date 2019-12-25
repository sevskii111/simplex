import React, { Component } from "react";
import { Table, Row, Col } from "reactstrap";

class MatrixComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width || 1,
      height: this.props.height || 1,
      values: this.props.values || [],
      saddle: { x: -1, y: -1 },
      readonly: this.props.readonly
    };
    if (!this.props.values) {
      for (let i = 0; i < this.state.height; i++) {
        this.state.values.push([]);
        for (let j = 0; j < this.state.width; j++) {
          this.state.values[i].push(0);
        }
      }
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleResize({ width, height }) {
    if (this.state.width === width && this.state.height === height) return;
    let oldValues = this.state.values;
    let newValues = [];
    for (let i = 0; i < height; i++) {
      newValues.push([]);
      for (let j = 0; j < width; j++) {
        if (oldValues[i]) {
          newValues[i].push(oldValues[i][j] || 0);
        } else {
          newValues[i].push(0);
        }
      }
    }
    this.setState({ width, height, values: newValues });
    this.props.handleMatrixChange(newValues);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.handleResize(this.props);
  }

  componentDidMount() {
    if (!this.props.readonly) {
      this.props.handleMatrixChange(this.state.values);
    }
  }

  handleInput = (x, y) => {
    return ({ target }) => {
      const { value } = target;

      let oldValues = this.state.values;
      let newValues = [];
      for (let i = 0; i < this.state.height; i++) {
        newValues.push([]);
        for (let j = 0; j < this.state.width; j++) {
          if (oldValues[i]) {
            newValues[i].push(oldValues[i][j] || 0);
          } else {
            newValues[i].push(0);
          }
        }
      }
      newValues[x][y] = Number(value);
      this.props.handleMatrixChange(newValues);
      this.setState({ ...this.state, values: newValues });
    };
  };

  renderTable() {
    const calcBg = (i, j) => {
      if (!this.props.saddle) return "";
      if (i === this.props.saddle.y && j === this.props.saddle.x) {
        return "highlight";
      } else if (i === this.props.saddle.y || j === this.props.saddle.x) {
        return "semi-highlight";
      } else {
        return "";
      }
    };
    let columns = [];
    columns.push(
      <tr key="0c">
        <th className="bg-light">Игроки</th>
        {this.state.values[0].map((v, i) => (
          <th className="bg-light" key={`-${i}`}>
            B<sub>{i + 1}</sub>
          </th>
        ))}
        <th className="bg-light">
          min(A<sub>i</sub>)
        </th>
      </tr>
    );

    let maxs = [];
    for (let i = 0; i < this.state.height; i++) {
      let rows = [
        <th className="bg-light" key={`min-${i}`}>
          A<sub>{i + 1}</sub>
        </th>
      ];
      let min = this.state.values[i][0];
      for (let j = 0; j < this.state.width; j++) {
        const val = this.props.readonly ? this.props.values[i][j] : this.state.values[i][j];
        min = Math.min(min, val);
        if (!maxs[j] || maxs[j] < val) {
          maxs[j] = val;
        }
        rows.push(
          <td key={`${i}-${j}`} className={calcBg(i, j)}>
            <input
              type="number"
              value={val || ""}
              placeholder="0"
              className={`table-input`}
              onChange={this.handleInput(i, j)}
              key={`${i}-${j}`}
              readOnly={this.props.readonly}
            />
          </td>
        );
      }
      rows.push(
        <td className="bg-light" key={`${i}-min`}>
          {min}
        </td>
      );
      columns.push(<tr key={i}>{rows}</tr>);
    }

    columns.push(
      <tr key="lc">
        <th className="bg-light">
          max(B<sub>i</sub>)
        </th>
        {maxs.map((m, j) => (
          <td className="bg-light" key={`${j}-`}>
            {m}
          </td>
        ))}
      </tr>
    );

    return columns;
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={12} md="auto">
            <Table bordered className="text-center" responsive>
              <tbody>{this.renderTable()}</tbody>
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}

export default MatrixComponent;
