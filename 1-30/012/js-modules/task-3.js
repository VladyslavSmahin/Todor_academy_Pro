export function task_3() {
    function createLogger(loggerString = '') {
        let logString = loggerString
        return function (newLoggerString) {
            return logString = `${logString} ${newLoggerString}`;
        }
    }

    let string = createLogger('hi');
    console.log(string('Vlad'));
    console.log(string('Zhekos'));
}