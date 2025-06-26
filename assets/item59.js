"use strict";
function assertUnreachable(value) {
    throw new Error(`Missed a case! ${value}`);
}
function drawShape(shape, content) {
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
function processShape(shape) {
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
function processShape01(shape) {
    switch (shape.type) {
        case 'box':
            break;
        case 'circle':
            break;
        case 'line':
            break;
        default:
            const exhaustiveCheck = shape;
            throw new Error(`Missed a case: ${exhaustiveCheck}`);
    }
}
function processShape02(shape) {
    switch (shape.type) {
        case 'box':
            break;
        case 'circle':
            break;
        case 'line':
            break;
        default:
            shape;
            throw new Error(`Missed a case: ${shape}`);
    }
}
{
    function shoot(a, b) {
        if (a === b) {
            console.log('draw');
        }
        else if ((a === 'rock' && b === 'scissors') || (a === 'paper' && b === 'rock')) {
            console.log('A wins');
        }
        else {
            console.log('B wins');
        }
    }
}
{
    function shoot(a, b) {
        const pair = `${a},${b}`;
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
