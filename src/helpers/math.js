import * as linear from 'linear-solve';
import {
    transpose,
    intersect
} from "mathjs";
import {
    func
} from 'prop-types';

export const findSaddle = (matrix) => {
    const height = matrix.length || 0;
    const width = matrix ? matrix[0].length : 0;

    let mins = [];
    for (let i = 0; i < height; i++) {
        mins[i] = Math.min(...matrix[i]);
    }

    let maxs = [];
    for (let j = 0; j < width; j++) {
        maxs[j] = matrix[0][j];
        for (let i = 1; i < height; i++) {
            if (matrix[i][j] > maxs[j]) {
                maxs[j] = matrix[i][j];
            }
        }
    }


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (mins[j] === maxs[i]) {
                return {
                    x: i,
                    y: j,
                    price: matrix[i][j]
                };
            }
        }
    }

    return false;
};

export const lienarSolve = (matrix) => {
    const height = matrix.length || 0;
    const width = matrix ? matrix[0].length : 0;
    if (height !== width) return {
        a: [],
        b: [],
        s: false
    };

    const a = [];
    for (let i = 0; i < height; i++) {
        a.push([]);
        for (let j = 0; j < width; j++) {
            a[i].push(matrix[i][j]);
        }
        a[i].push(-1);
    }
    a.push([...matrix.map(() => 1), 0]);

    const b = [...matrix.map(() => 0), 1];
    try {
        const s = linear.solve(a, b);
        return {
            a,
            b,
            s
        };
    } catch (e) {
        return {
            a,
            b,
            s: false
        };
    }
};

const EPSILON = 0.000001;

function isBellow(line, point) {
    return (line.b + line.a * point[0] + EPSILON >= point[1]);
}

function isAbove(line, point) {
    return (line.b + line.a * point[0] - EPSILON <= point[1]);
}

export const solveGraph = (matrix) => {
    if (!matrix || !matrix[0] || !(matrix.length === 2 || matrix[0].length === 2)) return false;
    let result = {
        matrix: [],
        bolds: [],
        point: null
    };
    const mode = matrix.length === 2 ? "h" : "v";
    let lines;
    let f;
    if (mode === "h") {
        result.matrix = transpose(matrix);
        lines = matrix[0].map((v, i) => ({
            a: matrix[1][i] - v,
            b: v,
            x1: 0,
            y1: v,
            x2: 1,
            y2: matrix[1][i]
        }));
        f = isBellow;
    } else {
        result.matrix = matrix;
        lines = matrix.map((l) => ({
            a: l[1] - l[0],
            b: l[0],
            x1: 0,
            y1: l[0],
            x2: 1,
            y2: l[1]
        }));
        f = isAbove;
    }
    let points = [];
    const allLines = [...lines, {
        x1: 0,
        y1: -100,
        x2: 0,
        y2: 100
    }, {
        x1: 1,
        y1: -100,
        x2: 1,
        y2: 100
    }];
    for (let i = 0; i < allLines.length; i++) {
        const l1 = allLines[i];
        for (let j = i + 1; j < allLines.length; j++) {
            const l2 = allLines[j];
            const point = intersect([l1.x1, l1.y1], [l1.x2, l1.y2], [l2.x1, l2.y1], [l2.x2, l2.y2]);
            if (point && !~points.findIndex(p => p[0] === point[0] && p[1] === point[1])) {
                points.push(point);
            }
        }
    }
    points = points.filter(p => p[0] >= 0 && p[0] <= 1 && lines.every(l => f(l, p))).sort((a, b) => (a[0] - b[0]));
    console.log(points);
    for (let i = 0; i < points.length - 1; i++) {
        result.bolds.push([points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]]);
    }
    console.log(result.bolds);
    return result;
};