class StringReader {
    constructor(text) {
        this.text = text;
        this.cursor = 0;
    }

    read() {
        return this.text.charAt(this.cursor++);
    }
}

class BufferedReader {
    constructor(input) {
        this.buffer = new StringReader("");
        this.input = input;
    }

    read() {
        let c;
        if (c = this.buffer.read()) {
            return c;
        }
        this.buffer = new StringReader(this.input.read());
        return this.read();
    }
}

class StreamLocator {
    constructor(stream) {
        this.stream = stream;
        this.row = 0;
        this.col = 0;
    }

    read() {
        let c = this.stream.read();
        if (!c) {
            return undefined;
        }
        if (c === "\n") {
            this.row++;
            this.col = 0;
        } else {
            this.col++;
        }
        return c;
    }

    skip(func) {
        let c;
        do {
            c = this.read();
        } while (c && func(c));
        return c;
    }

    skipCounting(func) {
        let count = 0;
        let c;
        do {
            c = this.read();
            count++;
        } while (c && func(c));
        return [count, c];
    }
}

class StringBuilder {
    constructor(text) {
        this.text = text || "";
    }
    write(data) {
        this.text += data;
    }
}

class StringLengthCounter {
    constructor() {
        this.length = 0;
    }
    write(data) {
        this.length += data.length;
    }
}

function obtainInputStream(input) {
    return new StreamLocator((typeof (input) === "string" && new StringReader(input)) || input);
}

function obtainOutputStream(output) {
    return output || new StringBuilder();
}

function obtainStreams(input, output) {
    return [obtainInputStream(input), obtainOutputStream(output)];
}

module.exports = {
    StringReader,
    StringBuilder,
    BufferedReader,
    StreamLocator,
    StringLengthCounter,
    obtainInputStream,
    obtainOutputStream,
    obtainStreams
};