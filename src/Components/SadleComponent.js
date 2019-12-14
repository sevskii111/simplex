import React from 'react';
import {Col, Row} from "reactstrap";

const SadleComponent = ({min, max, price}) => {
    let result;
    if (min !== -1 && max !== -1) {
        result = (
            <>
                <h2 className="text-success">
                    Седловая точка найдена:
                </h2>
                <h3>({min + 1},{max + 1})</h3>
                <h4>Цена игры: {price}</h4>
            </>
        );
    } else {
        result = (
            <h2 className="text-warning">
                Седловая точка не найдена
            </h2>
        );
    }
    return (<Row className="text-left">
            <Col xs={{size: 11, offset: 1}} md={{size: 6, offset: 1}}>
                <hr/>
                {result}
            </Col>
        </Row>
    );
};

export default SadleComponent;