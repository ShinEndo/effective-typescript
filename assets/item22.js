"use strict";
var _a;
{
    const elem = document.getElementById('what-time-is-it');
    if (elem) {
        elem.innerHTML = 'Party Time'.blink();
    }
    else {
        alert('No element #what-time-is-it');
    }
}
{
    const elem = document.getElementById('what-time-is-it');
    if (!elem)
        throw new Error('Unable to find #what-time-is-it');
    elem.innerHTML = 'Party Time'.blink();
}
{
    function contains(text, search) {
        if (search instanceof RegExp) {
            return !!search.exec(text);
        }
        return text.includes(search);
    }
}
{
    ;
    ;
    function pickFruit(fruit) {
        if ('isGoodForBaking' in fruit) {
            console.log(fruit);
        }
        else {
            console.log(fruit);
        }
        console.log(fruit);
    }
}
{
    function contains(text, terms) {
        const termList = Array.isArray(terms) ? terms : [terms];
        console.log(termList);
    }
}
{
    function handleEvent(e) {
        switch (e.type) {
            case 'download':
                console.log('Download', e.filename);
                break;
            case 'upload':
                console.log('Upload', e.filename, e.contents.length, 'bytes');
                break;
        }
    }
}
{
    function isInputElement(el) {
        return 'value' in el;
    }
    function getElementContent(el) {
        if (isInputElement(el)) {
            return el.value;
        }
        return el.textContent;
    }
    const formEls = document.querySelectorAll('.my-form *');
    const formInputEls = [...formEls].filter(isInputElement);
    console.log(formInputEls);
}
{
    function isNumber(v) {
        return typeof v === 'number';
    }
    const stringOrNumberArr = [0, '1', 2, '3'];
    const stringArr = stringOrNumberArr
        .filter(v => typeof v === 'number')
        .map(v => v.toFixed());
}
{
    // const nameToNickname = new Map<string,string>();
    // declare let yourName: string;
    // let nameToUse: string;
    // if(nameToNickname.has(yourName)) {
    // 	nameToUse = nameToNickname.get(yourName);
    // } else {
    // 	nameToUse = yourName;
    // }
    const nameToNickname = new Map();
    const yourName = 'Jack';
    const nickname = nameToNickname.get(yourName);
    let nameToUse;
    if (nickname !== undefined) {
        nameToUse = nickname;
    }
    else {
        nameToUse = yourName;
    }
}
{
    const nameToNickname = new Map();
    const yourName = 'Jack';
    const nameToUse = (_a = nameToNickname.get(yourName)) !== null && _a !== void 0 ? _a : yourName;
    console.log(nameToUse);
}
