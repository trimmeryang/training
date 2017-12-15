# Promise
## 目标
1 理解promise的用法
2 理解promise的同步／异步。

## 问题1
```js
doSomething().then(function () {
  return doSomethingElse();
});
doSomething().then(function () {
  doSomethingElse();
});
doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

## 问题2 （自己建个基于express4的项目， 然后订单数据在40.26的elasticsearch上）
有一组order
```js
let orders = ['1006385232', '1005700831', '1005441686'];
```
写个方法，依次循环orderId, 取出订单的价格，然后计算总价。 注意是依次，不是Promise.all()方法。

## 问题3 （扩展）
把问题1／2， 用co／async怎么实现？ 下期吗？
