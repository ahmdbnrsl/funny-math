export class CircleInTriangle {
    static GET_RADIUS(a: number, b: number, c: number): number {
        const s: number = (a + b + c) / 2;
        const result: number = Math.sqrt(s * (s - a) * (s - b) * (s - c)) / s;
        console.log(result);
        return result;
    }

    static GET_TRIANGLE_SIDE(r: number): number {
        const result: number = (6 * r) / Math.sqrt(3);
        console.log(result);
        return result;
    }
}
