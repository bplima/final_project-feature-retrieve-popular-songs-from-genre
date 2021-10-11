"use strict";

let exps = {};
for (let submodule of ["error", "stream", "parse", "object"]) {
    exps[submodule] = require("./"+submodule+".js");
}
Object.freeze(exps);

module.exports = exps;