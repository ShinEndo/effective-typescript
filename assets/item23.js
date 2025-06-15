"use strict";
function isPointInPolygon(polygon, pt) {
    const { bbox } = polygon;
    if (bbox) {
        const { x, y } = bbox;
        if (pt.x < x[0] || pt.x > x[1] ||
            pt.y < y[0] || pt.y > y[1]) {
            return false;
        }
    }
}
