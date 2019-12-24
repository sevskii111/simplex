import { Col, Row } from "reactstrap";
import React from "react";
import Plot from 'react-plotly.js';

const GraphComponent = ({ sol }) => {
    if (!sol) return <div />;
    const { matrix, bolds, point } = sol;
    let data = matrix.map(l => ({
        x: [0, 1], y: [l[0], l[1]], type: 'scatter', mode: 'lines',
        line: {
            color: 'grey',
            width: 1
        }
    }));
    data.push(...bolds.map(b => ({
        x: [b[0], b[2]],
        y: [b[1], b[3]],
        type: 'scatter', mode: 'lines',
        line: {
            color: 'orange',
            width: 1
        }
    })));
    data.push({
        x: [1, 1], y: [0, Math.max(...matrix.map(l => Math.max(l[0], l[1])))], type: 'scatter', mode: 'lines',
        line: {
            color: 'black',
            width: 1
        }
    });
    let labels = [];

    return <Row>
        <Col xs={12}>
            <hr />
            <Plot data={data} labels={labels} layout={{ showlegend: false }} config={{ staticPlot: true }}
                className="plot" />
        </Col>
    </Row>
};

export default GraphComponent;