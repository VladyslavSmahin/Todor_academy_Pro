export function task_2() {
    function createCounter() {
        let counter = 0
        function getCountUp () {
            counter++
        }
        function getCountDown () {
            counter--
        }
        function getCurrentCount(){
            return counter
        }
        getCountUp()
        getCountUp()
        getCountDown()
        return{
            getCountUp,
            getCountDown,
            getCurrentCount
        }
    }
    return createCounter();
}