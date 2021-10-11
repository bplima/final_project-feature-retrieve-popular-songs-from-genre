"use strict";
function deepClone(obj) {
    let clone = {};
    for (let key in obj) {
        let val = obj[key];
        clone[key] = (typeof (val) === "object") ? deepClone(val) : val;
    }
    return clone;
}

function complete(incomplete, completions) {
    let completed = {};
    for (let key in incomplete) {
        completed[key] = incomplete[key];
    }
    for (let key in completions) {
        if (!Object.prototype.hasOwnProperty.call(incomplete, key))
            completed[key] = completions[key];
    }
    return completed;
}

module.exports = {
    deepClone,
    complete
};