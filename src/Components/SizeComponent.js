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
        let {name, value} = target;
        value = value || 1;
        this.setState({[name]: value});
        this.props.handleSizeChange({...this.state, [name]: value});
    }

    render() {
        return (
            <Row className="text-left">
                <Col xs={{size: 12}} md={{size: "auto"}}>
                    <h2>
                        Введите размеры таблицы игры:
                    </h2>
                </Col>
                <Col xs={11} md={3} className="mt-1">
                    <Form>
                        <FormGroup row>
                            <Col>
                                <Input type="number" placeholder={0} name="height" value={this.state.height}
                                       onChange={this.handleInput} min={1}/>
                            </Col>
                            <span className="cross">X</span>
                            <Col>
                                <Input type="number" placeholder={0} name="width" value={this.state.width}
                                       onChange={this.handleInput} min={1}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default SizeComponent;