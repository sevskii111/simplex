import { Col, Row } from "reactstrap";
import React from "react";
import Plot from "react-plotly.js";
import MatrixComponent from "./MatrixComponent";
import LinearComponent from "./LinearComponent";

const GraphComponent = ({ sol }) => {
  if (!sol) return <div />;
  const { matrix, bolds, superbolds, point } = sol;
  let data = matrix.map(l => ({
    x: [0, 1],
    y: [l[0], l[1]],
    type: "scatter",
    mode: "lines",
    line: {
      color: "grey",
      width: 2
    }
  }));

  data.push(
    ...superbolds.map(b => ({
      x: [b.x1, b.x2],
      y: [b.y1, b.y2],
      type: "scatter",
      mode: "lines",
      line: {
        color: "green",
        width: 2
      }
    }))
  );

  data.push(
    ...bolds.map(b => ({
      x: [b.x1, b.x2],
      y: [b.y1, b.y2],
      type: "scatter",
      mode: "lines",
      line: {
        color: "orange",
        width: 1
      }
    }))
  );

  if (point) {
    data.push({
      x: [point.x],
      y: [point.y],
      mode: "markers",
      type: "scatter",
      marker: { size: 5, color: "red" }
    });
  }

  data.push({
    x: [1, 1],
    y: [0, Math.max(...matrix.map(l => Math.max(l[0], l[1])))],
    type: "scatter",
    mode: "lines",
    line: {
      color: "black",
      width: 2
    }
  });
  let labels = [];

  const simplifiedMatrix =
    matrix.length === 2
      ? [
          [superbolds[0].b, superbolds[1].b],
          [superbolds[0].b + superbolds[0].a, superbolds[1].b + superbolds[1].a]
        ]
      : [
          [superbolds[0].b, superbolds[0].b + superbolds[0].a],
          [superbolds[1].b, superbolds[1].b + superbolds[1].a]
        ];

  const Label = () => {
    if (matrix.length === 2) {
      return <h2 className="text-success">Таблица имеет вид Nx2</h2>;
    } else {
      return <h2 className="text-success">Таблица имеет вид 2xN</h2>;
    }
  };
  console.log(superbolds);
  return (
    <Row>
      <Col xs={12}>
        <hr />
        <Label />
        <Plot
          data={data}
          labels={labels}
          layout={{ showlegend: false }}
          config={{ staticPlot: true }}
          className="plot"
        />
        <h3 className="text-success">Упрощённая матрица выглядит так:</h3>
      </Col>
      <Col xs={12}>
        <MatrixComponent
          height={2}
          width={2}
          values={simplifiedMatrix}
          readonly
        />
      </Col>
      <Col xs={12}>
        <LinearComponent matrix={simplifiedMatrix} />
      </Col>
    </Row>
  );
};

export default GraphComponent;
