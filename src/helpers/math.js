import * as linear from 'linear-solve';

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
                return {x: i, y: j, price: matrix[i][j]};
            }
        }
    }

    return false;
};

export const lienarSolve = (matrix) => {
    const height = matrix.length || 0;
    const width = matrix ? matrix[0].length : 0;
    if (height !== width) return false;

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
        return {a, b, s};
    } catch (e) {
        return false;
    }
};