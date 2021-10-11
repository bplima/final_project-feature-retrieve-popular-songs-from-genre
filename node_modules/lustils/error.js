class Error {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    toString() {
        return this.name + ": " + this.message;
    }
}

class SyntaxError extends Error {
    constructor(message) {
        super("SyntaxError", message);
    }
}

class InputError extends Error {
    constructor(message) {
        super("InputError", message);
    }
}

module.exports = {
    Error,
    SyntaxError,
    InputError
}