import { CircleInTriangle } from './001-circle-in-triangle';

class Main {
    constructor(private groupFuncs: Array<[(...x: any) => any, Array<any>]>) {}

    run(): any {
        this.groupFuncs.forEach((func: [(...x: any) => any, Array<any>]) => {
            func[0](...func[1]);
        });
    }
}

const result: number = new Main([
    [CircleInTriangle.GET_RADIUS, [6.93, 6.93, 6.93]],
    [CircleInTriangle.GET_TRIANGLE_SIDE, [2]]
]).run();
