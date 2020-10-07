import * as linear from "linear-solve";
import { transpose, intersect } from "mathjs";
import "node-fetch";

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

  for (let i = 0; i < maxs.length; i++) {
    for (let j = 0; j < mins.length; j++) {
      if (mins[j] === maxs[i]) {
        return {
          x: i,
          y: j,
          price: matrix[j][i],
        };
      }
    }
  }

  return false;
};

export const lienarSolve = (matrix) => {
  const height = matrix.length || 0;
  const width = matrix ? matrix[0].length : 0;
  if (height !== width)
    return {
      a: [],
      b: [],
      s: false,
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
      s,
    };
  } catch (e) {
    return {
      a,
      b,
      s: false,
    };
  }
};

const EPSILON = 0.000001;

class Line {
  constructor(a, b, x2, y2) {
    if (arguments.length == 2) {
      this.a = a;
      this.b = b;
      this.x1 = 0;
      this.y1 = b;
      this.x2 = 1;
      this.y2 = a + b;
    } else {
      this.x1 = a;
      this.y1 = b;
      this.x2 = x2;
      this.y2 = y2;
    }
  }
}

class Point {
  constructor([x, y], line1, line2) {
    this.x = x;
    this.y = y;
    this.line1 = line1;
    this.line2 = line2;
  }
}

function isBellow(line, point) {
  return line.b + line.a * point.x + EPSILON >= point.y;
}

function isAbove(line, point) {
  return line.b + line.a * point.x - EPSILON <= point.y;
}

export const solveGraph = (matrix) => {
  if (!matrix || !matrix[0] || !(matrix.length === 2 || matrix[0].length === 2))
    return false;
  let result = {
    matrix: [],
    bolds: [],
    superbolds: [],
    point: null,
  };
  const mode = matrix.length === 2 ? "h" : "v";
  let lines;
  let f, sf;
  if (mode === "h") {
    result.matrix = transpose(matrix);
    lines = matrix[0].map((v, i) => new Line(matrix[1][i] - v, v));
    f = isBellow;
    sf = (p1, p2) => p2.y - p1.y;
  } else {
    result.matrix = matrix;
    lines = matrix.map((l) => new Line(l[1] - l[0], l[0]));
    f = isAbove;
    sf = (p1, p2) => p1.y - p2.y;
  }
  let points = [];
  const allLines = [
    ...lines,
    new Line(0, Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER),
    new Line(1, Number.MIN_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER),
  ];
  for (let i = 0; i < allLines.length; i++) {
    const l1 = allLines[i];
    for (let j = i + 1; j < allLines.length; j++) {
      const l2 = allLines[j];
      const int = intersect(
        [l1.x1, l1.y1],
        [l1.x2, l1.y2],
        [l2.x1, l2.y1],
        [l2.x2, l2.y2]
      );
      if (!int) continue;
      const point = new Point(int, l1, l2);
      if (
        point &&
        !~points.findIndex((p) => p.x === point.x && p.y === point.y)
      ) {
        points.push(point);
      }
    }
  }
  points = points
    .filter((p) => p.x >= 0 && p.x <= 1 && lines.every((l) => f(l, p)))
    .sort((p1, p2) => p1.x - p2.x);
  for (let i = 0; i < points.length - 1; i++) {
    result.bolds.push(
      new Line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
    );
  }
  const hpoint = points
    .filter(
      (p) =>
        p.line1.y1 !== Number.MIN_SAFE_INTEGER &&
        p.line2.y1 !== Number.MIN_SAFE_INTEGER
    )
    .sort(sf)[0];

  if (hpoint) {
    result.point = hpoint;
    result.superbolds.push(hpoint.line1, hpoint.line2);
  }

  return result;
};

export const solveSimplex = async (matrix) => {
  try {
    var myMatrix = matrix.map(function (arr) {
      return [
        arr.slice(0, arr.length - 2),
        arr[arr.length - 2] ? "=" : "<=",
        arr[arr.length - 1],
      ];
    });
    for (let i = 0; i < myMatrix.length; i++) {
      myMatrix[i][myMatrix[i].length - 2] = myMatrix[i][myMatrix[i].length - 2]
        ? "<="
        : "=";
    }
    const res = await fetch(
      "https://blooming-shelf-93833.herokuapp.com/simplexmethod/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ...myMatrix
            .slice(myMatrix.length - 1)[0]
            .slice(0, myMatrix.slice(myMatrix.length - 1)[0].length - 2),
          myMatrix.slice(0, myMatrix.length - 1),
        ]),
      }
    );
    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  } catch (e) {
    return null;
  }
};
