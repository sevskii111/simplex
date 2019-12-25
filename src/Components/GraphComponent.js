import { Col, Row } from "reactstrap";
import React from "react";
import Plot from "react-plotly.js";

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
        ...bolds.map(b => ({
            x: [b.x1, b.x2],
            y: [b.y1, b.y2],
            type: "scatter",
            mode: "lines",
            line: {
                color: "orange",
                width: 2
            }
        }))
    );


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

    return (
        <Row>
            <Col xs={12}>
                <hr />
                <Plot
                    data={data}
                    labels={labels}
                    layout={{ showlegend: false }}
                    config={{ staticPlot: true }}
                    className="plot"
                />
            </Col>
        </Row>
    );
};

export default GraphComponent;
