"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleInTriangle = void 0;
class CircleInTriangle {
    static GET_RADIUS(a, b, c) {
        const s = (a + b + c) / 2;
        const result = Math.sqrt(s * (s - a) * (s - b) * (s - c)) / s;
        console.log(result);
        return result;
    }
    static GET_TRIANGLE_SIDE(r) {
        const result = (6 * r) / Math.sqrt(3);
        console.log(result);
        return result;
    }
}
exports.CircleInTriangle = CircleInTriangle;
