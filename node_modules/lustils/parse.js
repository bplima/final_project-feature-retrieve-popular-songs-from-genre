const {
    deepClone
} = require("./object.js");
const {
    obtainStreams
} = require("./stream.js");

function isDigit(x) {
    return x >= "0" && x <= "9";
}

function isLetter(x) {
    return (x >= "a" && x <= "z") || (x >= "A" && x <= "Z");
}

function isHexDigit(x) {
    return isDigit(x) || (x >= "a" && x <= "f") || (x >= "A" && x <= "F");
}

class MealyState {
    constructor() {
        this.transitions = {};
        this.any = {
            state: this,
            write: true
        };
    }

    setAnyTransition(transition) {
        this.any = transition;
    }

    consume(aut, c) {
        return this.transitions[c] || this.any;
    }

    setTransition(character, transition) {
        if (Array.isArray(character)) {
            for (let c of character) {
                this.setTransition(c, transition);
            }
        } else {
            this.transitions[character] = transition;
        }
    }
}

class MealySpecialState extends MealyState {
    constructor() {
        super();
    }

    setConsumer(consumer) {
        this.consume = consumer;
    }
}

class ExtendedMealyMachineBase {
    constructor(data, initial_state) {
        this.data = data || {};
        this.initial_state = initial_state || new MealyState();
    }
}

class ExtendedMealyMachine {
    constructor(base) {
        this.current_state = base.initial_state;
        this.data = deepClone(base.data);
    }

    consume(c, output) {
        let transition = this.current_state.consume(this, c);
        if (!transition.state) {
            return;
        }
        this.current_state = transition.state;
        if (transition.write) {
            output.write(transition.write === true ? c : transition.write);
        }
    }

    consumeStream(input, output) {
        let c;
        while ((c = input.read()) && typeof (c) === "string" && c !== "") {
            this.consume(c, output);
        }
        this.consume("", output); // in order to write out the buffer
    }

    static applier(machine_base) {
        return function (input, output) {
            [input, output] = obtainStreams(input, output);
            let machine = new ExtendedMealyMachine(machine_base);
            machine.consumeStream(input, output);
            return output;
        };
    }
}

module.exports = {
    isDigit,
    isLetter,
    isHexDigit,
    MealyState,
    MealySpecialState,
    ExtendedMealyMachineBase,
    ExtendedMealyMachine,
};