const myObj = [false, `one`, 1, {}, []];

const iterable = {
    [Symbol.iterator]() {
        let i = 0;
        const items = myObj;

        return {
            next() {
                if (i < items.length) {
                    return { value: items[i++], done: false}
                } else {
                    return { value: undefined, done: true}
                }
            }
        }
    }
}

for (let item of iterable){
    console.log(item);
}