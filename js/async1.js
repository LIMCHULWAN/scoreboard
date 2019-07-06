// async는 함수앞에 사용되어 함수를 비동기로 만든다.
// async는 반드시 await와 같이 사용하여야 한다.
// await 뒤에는 Promise가 와야하고, Promise가 그 결과를 리턴할때까지 기다린다.
// async 비동기 함수가 리턴된 결과를 받기 위해서 then 문을 연결할수 있다.

console.log('start');

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    console.log(a);
    const b = await resolveAfter2Seconds(30);
    console.log(b);
    return x + a + b;
}

console.log(add1(10).then(value => console.log(value)));

console.log('end');