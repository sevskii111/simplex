import React, {Component} from 'react';
import SizeComponent from './SizeComponent';
import MatrixComponent from "./MatrixComponent";
import SadleComponent from "./SadleComponent";
import {findMin, findMax} from "../helpers/math";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 1,
            height: 1,
            matrix: [[0]]
        };

        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleMatrixChange = this.handleMatrixChange.bind(this);
    }

    handleSizeChange({width, height}) {
        this.setState({width, height});
    }

    handleMatrixChange(values) {
        this.setState({matrix: values});
    }

    renderSolution() {
        const min = findMin(this.state.matrix);
        const max = findMax(this.state.matrix);
        if (min >= 0 && max >= 0) {
            return (<SadleComponent min={min} max={max} price={this.state.matrix[min][max]}/>);
        } else {
            return (<SadleComponent min={min} max={max}/>);
        }
    }

    render() {


        return (
            <>
                <SizeComponent handleSizeChange={this.handleSizeChange}/>
                <MatrixComponent width={this.state.width} height={this.state.height}
                                 handleMatrixChange={this.handleMatrixChange}/>
                {this.renderSolution()}
            </>
        )
            ;
    }
}

export default MainComponent;