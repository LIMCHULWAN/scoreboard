// 아래 코드는 비동기가 순차적으로 처리되지 않는다.
// 순차적으로 처리하기 위해서 코드를 수정하자.

new Promise(resolve => {
    setTimeout(()=>{
        console.log('async1');
        resolve('success');
    }, 1000);
}).then(value=>{
    //Promise를 리턴하여 비동기 작업을 동기식으로 처리한다. setTimeout 같은 비동기를 new Promise로 감싸지 않으면 비동기적으로 동작한다.
    console.log(value);
    return new Promise(resolve => {
        // 비동기 코드
        setTimeout(()=>{
            console.log('async2');
            resolve('async2 success');
        }, 1000);
    });

}).then(value=>{
    console.log(value);
});