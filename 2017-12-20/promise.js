// function doSomething () {
//     return 1;
// };

var doSomething = function (val) {
    console.log(val) ;
    return val;
};
var doSomethingElse = function () {
    return 2;
};
console.log(doSomething(4));

doSomething(3).then(
    doSomethingElse()
).then(function (res) {
    console.log(res);
});

// http://web.jobbole.com/82601/
// http://blog.csdn.net/kingppy/article/details/50487814