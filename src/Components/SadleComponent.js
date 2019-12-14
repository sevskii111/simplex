import React from 'react';
import {Col, Row} from "reactstrap";

const SadleComponent = ({saddle}) => {
    let result;

    if (!saddle) {
        result = (
            <h2 className="text-warning">
                Седловая точка не найдена
            </h2>
        );
    } else {
        result = (<>
                <h2 className="text-success">
                    Матрица имеет седловую точку
                </h2>
                <h3>Координаты точки: ({saddle.x + 1},{saddle.y + 1})</h3>
                <h3>Цена игры: {saddle.price}</h3>
            </>
        );
    }

    return (<Row className="text-left">
            <Col xs={12}>
                <hr/>
                {result}
            </Col>
        </Row>
    );
};

export default SadleComponent;