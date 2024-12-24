"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _001_circle_in_triangle_1 = require("./001-circle-in-triangle");
class Main {
    constructor(groupFuncs) {
        this.groupFuncs = groupFuncs;
    }
    run() {
        this.groupFuncs.forEach((func) => {
            func[0](...func[1]);
        });
    }
}
const result = new Main([
    [_001_circle_in_triangle_1.CircleInTriangle.GET_RADIUS, [6.93, 6.93, 6.93]],
    [_001_circle_in_triangle_1.CircleInTriangle.GET_TRIANGLE_SIDE, [2]]
]).run();
