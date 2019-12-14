import React from 'react';
import {Row, Col} from 'reactstrap';

const playerSolution = (ind, a, s) => {
    return (
        <>
            <h3>Решение для {ind} игрока</h3>
            {a.map((aa, i) => (
                <p key={`a-${i}`}>{aa.splice(0, aa.length - 1).map((p, j) => (
                    <span
                        key={`a-${i}-${j}`}>{(p >= 0 && j !== 0) ? `+${p}` : p}p<sub>{j + 1}</sub></span>))}={i < a.length - 1 ? 'y' : '1'}</p>))}
        </>
    );
};

const LinearComponent = ({as, ss}) => {
    if (as[0] || as[1]) {
        return (
            <Row>
                <Col xs={12}>
                    <hr/>
                    <h2 className="text-success">Таблица имеет вид NxN</h2>
                    {playerSolution(1, as[0], ss[0])}
                </Col>
            </Row>
        );
    } else {
        return <div/>;
    }
};

export default LinearComponent;