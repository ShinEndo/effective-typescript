"use strict";
function hasAKeyThatEndWithZ(o) {
    for (const key in o) {
        if (key.endsWith('z')) {
            console.log(key, o[key]);
            return true;
        }
        return false;
    }
}
