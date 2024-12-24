function myFunc() {
  console.log(this);
}

myFunc(); // this will be undefined in strict mode and window in non-strict mode

const obj = {
  myFunc: myFunc,
};

obj.myFunc(); // this will be obj

const boundFunc = myFunc.bind(obj);

boundFunc(); // this will be obj