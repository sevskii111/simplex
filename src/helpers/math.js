export const findMin = (matrix) => {
    if (!matrix) {
        return false;
    }

    let w = matrix[0].length;
    let h = matrix.length;
    l1: for (let i = 0; i < h; i++) {
        for (let j = 0; j < h; j++) {
            for (let k = 0; k < w; k++) {
                if (matrix[i][k] > matrix[j][k]) continue l1;
            }
        }
        return i;
    }
    return -1;
};

export const findMax = (matrix) => {
    if (!matrix) {
        return false;
    }

    let w = matrix[0].length;
    let h = matrix.length;
    l1: for (let i = 0; i < w; i++) {
        for (let j = 0; j < w; j++) {
            for (let k = 0; k < h; k++) {
                if (matrix[k][i] < matrix[k][j]) continue l1;
            }
        }
        return i;
    }
    return -1;
};