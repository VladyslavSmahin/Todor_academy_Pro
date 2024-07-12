export function task_3() {
    let car = {
        brand: 'ВАЗ',
        model: '2104',
        year: 1999,
    }
    Object.preventExtensions('car');
    console.log(Object.isExtensible('car'));
    //Object.defineProperty('car','color',{});
     ///TypeError: Object.defineProperty called on non-object at Function.defineProperty (<anonymous>)
    let deepCopy = JSON.parse(JSON.stringify(car));
    console.log(deepCopy);
    Object.seal(deepCopy);
    console.log(Object.isSealed('deepCopy'));
    delete deepCopy.year;
    console.log(deepCopy); /// TypeError: Cannot delete property 'year'
}
