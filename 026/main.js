/*
console.log('sync1');
setTimeout(() => {
    console.log('timeout1');
},0);
Promise.resolve().then(() => {
    console.log('promise1');
})
setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('promise2 in timeout2');
    });
    console.log('sync2 in timeout2');
},0);
console.log('sync3');
*/

////

const btn = document.querySelector('#myBtn');

btn.addEventListener('click', () => {
    Promise.resolve().then(() => {
        console.log('microtask1');
    });
    console.log('listener1');
});
btn.addEventListener('click', () => {
    Promise.resolve().then(() => {
        console.log('microtask2');
    });
    console.log('listener2');
});

btn.click();

document.addEventListener('keydown', () => {
    console.log('keydown');
});
document.addEventListener('keydown', () => {
    console.log('keyup');
});
btn.addEventListener('mousemove', () => {
    console.log('mousemove');
});