interface FillLayer {
    type: 'fill';
    layout: FillLayout;
    paint: FillPaint;
}
interface LineLayer{
    type: 'line';
    layout: LineLayout;
    paint: LinePaint;
}
interface PointLayout {
    type: 'point';
    layout: PointLayout;
    paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayout;
interface FillLayout{}
interface LineLayout{}
interface PointLayout{}
interface FillPaint{}
interface LinePaint{}
interface PointPaint{}

function drawLayer(layer: Layer) {
    if(layer.type === 'fill') {
        const {layout,paint} = layer;
    } else if(layer.type === 'line') {
        const {layout,paint} = layer;
    } else {
        const {layout,paint} = layer;
    }
}

interface Name {
    name: string;
}
interface PersonWithBirth extends Name {
    placeOfBirth: string;
    placeOfDate: Date;
}
type Person = Name | PersonWithBirth;
function eulogize(person: Person) {
    if('placeOfBirth' in person) {
        const {name, placeOfBirth, placeOfDate} = person;
    } else {
        const name = person;
    }
}
export {}