import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import SizeComponent from "./SizeComponent";
import MatrixComponent from "./MatrixComponent";
import SadleComponent from "./SadleComponent";
import LinearComponent from "./LinearComponent";
import GraphComponent from "./GraphComponent";
import { findSaddle, lienarSolve, solveGraph } from "../helpers/math";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1,
      height: 1,
      matrix: [[0]],
      graphSol: false
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleMatrixChange = this.handleMatrixChange.bind(this);
  }

  handleSizeChange({ width, height }) {
    this.setState({ width: Math.max(1, width), height: Math.max(1, height) });
  }

  handleMatrixChange(values) {
    this.setState({
      matrix: values,
      saddle: findSaddle(values),
      graphSol: solveGraph(values)
    });
  }

  renderSolution() {
    if (!this.state.matrix) return;
    if (this.state.saddle) {
      return <SadleComponent saddle={this.state.saddle} />;
    } else if (this.state.graphSol) {
      return <GraphComponent sol={this.state.graphSol} />;
    } else if (this.state.matrix.length === this.state.matrix[0].length) {
      return <LinearComponent matrix={this.state.matrix} />;
    } else {
      return (
        <h1 className="text-warning">
          Не удаётся найти решение ни одним из способов
        </h1>
      );
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={{ offset: 1, size: "10" }} className="mt-2">
            <SizeComponent handleSizeChange={this.handleSizeChange} />
            <MatrixComponent
              width={this.state.width}
              height={this.state.height}
              handleMatrixChange={this.handleMatrixChange}
              saddle={this.state.saddle}
            />
            {this.renderSolution()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
