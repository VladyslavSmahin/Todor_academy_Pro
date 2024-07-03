export function task_3() {
    function createLogger(createLoggerString) {
        let str = '';
        if (createLoggerString === undefined){
            createLoggerString = ""
        }

        function logger(loggerString) {
            console.log(str = str + " " + createLoggerString + " " + loggerString);
        }

        logger(111);
        console.log(str);
        logger(2);
        console.log(str);
        logger(1);
        logger('wow');
    }

    createLogger(12)
}