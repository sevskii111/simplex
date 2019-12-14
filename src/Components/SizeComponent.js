import React, {Component} from 'react';
import {Row, Col, Form, FormGroup, Input} from 'reactstrap';


class SizeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 1,
            height: 1
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput({target}) {
        const {name, value} = target;
        this.setState({[name]: value});
        this.props.handleSizeChange({...this.state, [name]: value});
    }

    render() {
        return (
            <Row className="text-left">
                <Col xs={{size: 11, offset: 1}} md={{size: 6, offset: 1}}>
                    <h2>
                        Введите размеры таблицы игры:
                    </h2>
                </Col>
                <Col xs={12}>
                    <Form>
                        <FormGroup row>
                            <Col xs={{size: 6, offset: 1}} md={{size: 2, offset: 1}}>
                                <Row>
                                    <Col>
                                        <Input type="number" placeholder={0} name="width" value={this.state.width}
                                               onChange={this.handleInput} min={1}/>
                                    </Col>
                                    <span className="cross">X</span>
                                    <Col>
                                        <Input type="number" placeholder={0} name="height" value={this.state.height}
                                               onChange={this.handleInput} min={1}/>
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default SizeComponent;