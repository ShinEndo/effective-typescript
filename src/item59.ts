type Coord = [x: number, y: number];
interface Box {
    type: 'box';
    topLeft: Coord;
    size: Coord;
}
interface Circle {
    type: 'circle';
    center: Coord;
    radius: number;
}
interface Line {
    type: 'line';
    start: Coord;
    end: Coord;
}
type Shape = Box | Circle | Line;

function assertUnreachable(value: never): never {
    throw new Error(`Missed a case! ${value}`);
}
function drawShape(shape: Shape, content: CanvasRenderingContext2D) {
    switch (shape.type) {
        case 'box':
            content.rect(...shape.topLeft, ...shape.size);
            break;
        case 'circle':
            content.arc(...shape.center, shape.radius, 0, 2 * Math.PI);
            break;
        case 'line':
            content.moveTo(...shape.start);
            content.lineTo(...shape.end);
            break;
        default:
            assertUnreachable(shape);
    }
}
function processShape(shape: Shape) {
    switch (shape.type) {
        case 'box':
            break;
        case 'circle':
            break;
        case 'line':
            break;
        default:
            console.log(shape);
    }
}
function processShape01(shape: Shape) {
    switch (shape.type) {
        case 'box':
            break;
        case 'circle':
            break;
        case 'line':
            break;
        default:
            const exhaustiveCheck: never = shape;
            throw new Error(`Missed a case: ${exhaustiveCheck}`);
    }
}
function processShape02(shape: Shape) {
    switch (shape.type) {
        case 'box':
            break;
        case 'circle':
            break;
        case 'line':
            break;
        default:
            shape satisfies never;
            throw new Error(`Missed a case: ${shape}`);
    }
}
{
    type Play = 'rock' | 'paper' | 'scissors';
    function shoot(a: Play, b: Play) {
        if (a === b) {
            console.log('draw');
        } else if ((a === 'rock' && b === 'scissors') || (a === 'paper' && b === 'rock')) {
            console.log('A wins');
        } else {
            console.log('B wins');
        }
    }
}
{
    type Play = 'rock' | 'paper' | 'scissors';
    function shoot(a: Play, b: Play) {
        const pair = `${a},${b}` as `${Play},${Play}`;
        switch (pair) {
            case 'rock,rock':
            case 'paper,paper':
            case 'scissors,scissors':
                console.log('dwaw');
                break;
            case 'rock,scissors':
            case 'paper,rock':
            case 'scissors,paper':
                console.log('A wins');
                break;
            case 'rock,paper':
            case 'paper,scissors':
            case 'scissors,rock':
                console.log('B wins');
                break;
            default:
                assertUnreachable(pair);
        }
    }
}
