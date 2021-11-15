/**
 * Implement Strategy pattern to choose between different logging algorithms, choosing between:
 */
 class Info {
    logging(message) {
        console.log("Information from Info class " +message);
    }
}

class Warn {
    logging(message) {
        console.log("Information from Warn class " +message);
    }
}

class Error {
    logging(message) {
        console.log("Information from Error class " +message);
    }
}

class Table {
    logging(array) {
        for(let i = 0; i<array.length; i++){
            console.log("Information from Table class " + array[i]);
        }
    }

}

class Strategy {
    setStrategy(loggingMethod) {
        this.loggingMethod = loggingMethod;
    }

    logging(message) {
        this.loggingMethod.logging(message);
    }
}


const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']); 