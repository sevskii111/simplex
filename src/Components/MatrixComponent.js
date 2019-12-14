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
        console.log(this.state)
    }

    render() {
        const TableContent = () => {
            let columns = [];
            let rows = [];
            for (let i = 0; i < this.state.height; i++) {
                for (let j = 0; j < this.state.width; j++) {
                    rows.push((<td key={`${i}-${j}`}><input type="number" value={this.state.values[i][j]}/></td>))
                }
                columns.push((<tr key={i}>{rows}</tr>));
            }
            return columns;
        };

        return (
            <div className="container">
                <Row>
                    <Col xs="12">
                        <Table>
                            <tbody>
                            <TableContent/>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MatrixComponent;