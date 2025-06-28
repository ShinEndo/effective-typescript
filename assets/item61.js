"use strict";
{
    function shouldUpdate(oldProps, newProps) {
        for (const kStr in oldProps) {
            const k = kStr;
            if (oldProps[k] !== newProps[k]) {
                if (k !== 'onClick')
                    return true;
            }
        }
        return false;
    }
}
{
    const REQUIRES_UPDATE = {
        xs: true,
        ys: true,
        xRange: true,
        yRange: true,
        color: true,
        onClick: false,
    };
    function shouldUpdate(oldProps, newProps) {
        for (const kStr in oldProps) {
            const k = kStr;
            if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
                return true;
            }
        }
        return false;
    }
}
