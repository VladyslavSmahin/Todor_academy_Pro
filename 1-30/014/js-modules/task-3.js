export function task_3() {
    function replaceWords(string, a, b) {
        return string.split(a).join(b);
    }
    const str = 'June July and June';
    console.log(replaceWords(str, 'June', 'August'));
}