import React, {Component} from 'react';
import {Table, Row, Col} from 'reactstrap';

class MatrixComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width || 1,
            height: this.props.height || 1,
            values: []
        };
        for (let i = 0; i < this.state.height; i++) {
            this.state.values.push([]);
            for (let j = 0; j < this.state.width; j++) {
                this.state.values[i].push(0);
            }
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleResize({width, height}) {
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
        this.setState({width, height, values: newValues});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleResize(this.props);

    }

    handleInput = (x, y) => {
        return ({target}) => {
            const {value} = target;

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
            newValues[x][y] = value;
            this.props.handleMatrixChange(newValues);
            this.setState({...this.state, values: newValues});
        };
    };

    renderTable() {
        let columns = [];
        for (let i = 0; i < this.state.height; i++) {
            let rows = [];
            for (let j = 0; j < this.state.width; j++) {
                rows.push((<td key={`${i}-${j}`}><input type="number" value={this.state.values[i][j]}
                                                        className="table-input"
                                                        onChange={this.handleInput(i, j)} key={`${i}-${j}`}/></td>))
            }
            columns.push((<tr key={i}>{rows}</tr>));
        }
        return columns;
    };

    render() {


        return (
            <>
                <Row>
                    <Col xs={{size: 6, offset: 1}}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{size: "auto", offset: 1}}>
                        <Table bordered>
                            <tbody>
                            {this.renderTable()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        );
    }
}

export default MatrixComponent;