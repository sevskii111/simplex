import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import SizeComponent from './SizeComponent';
import MatrixComponent from "./MatrixComponent";
import SadleComponent from "./SadleComponent";
import LinearComponent from './LinearComponent';
import {findSaddle, lienarSolve} from "../helpers/math";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 1,
            height: 1,
            matrix: [[0]],
            linA: false
        };

        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleMatrixChange = this.handleMatrixChange.bind(this);
    }

    handleSizeChange({width, height}) {
        this.setState({width, height});
    }

    handleMatrixChange(values) {
        this.setState({matrix: values, saddle: findSaddle(values), linA: lienarSolve(values)});
    }

    renderSolution() {
        if (!this.state.matrix) return;
        console.log(this.state.linA);
        return (
            <>
                <SadleComponent saddle={this.state.saddle}/>
                <LinearComponent matrix={this.state.matrix}/>
            </>);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={{offset: 1, size: "10"}} className="mt-2">
                        <SizeComponent handleSizeChange={this.handleSizeChange}/>
                        <MatrixComponent width={this.state.width} height={this.state.height}
                                         handleMatrixChange={this.handleMatrixChange} saddle={this.state.saddle}/>
                        {this.renderSolution()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainComponent;