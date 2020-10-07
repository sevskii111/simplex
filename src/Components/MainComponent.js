import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import SizeComponent from "./SizeComponent";
import MatrixComponent from "./MatrixComponent";
import SadleComponent from "./SadleComponent";
import LinearComponent from "./LinearComponent";
import GraphComponent from "./GraphComponent";
import { solveSimplex } from "../helpers/math";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 2,
      height: 2,
      matrix: [
        [2, 1, 0, 4],
        [-1, 1, 0, 0],
        [4, 1, 0, 0],
      ],
      graphSol: false,
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleMatrixChange = this.handleMatrixChange.bind(this);
  }

  handleSizeChange({ width, height }) {
    this.setState({ width: Math.max(1, width), height: Math.max(1, height) });
  }

  handleMatrixChange(values) {
    solveSimplex(values).then((res) => {
      this.setState({
        matrix: values,
        solution: res,
      });
    });
  }

  renderSolution() {
    if (!this.state.matrix) return;
    if (this.state.solution) {
      let resStr = "F(";
      for (const x of this.state.solution.point) {
        resStr += x + ", ";
      }
      resStr = resStr.substr(0, resStr.length - 2);
      resStr += ") = " + this.state.solution.decision;
      return <p>{resStr}</p>;
    } else {
      return <h1 className="text-warning">Не удаётся найти решение</h1>;
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={{ offset: 1, size: "10" }} className="mt-2">
            <SizeComponent handleSizeChange={this.handleSizeChange} />
            <MatrixComponent
              width={this.state.width + 2}
              height={this.state.height + 1}
              values={this.state.matrix}
              handleMatrixChange={this.handleMatrixChange}
            />
            {this.renderSolution()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
