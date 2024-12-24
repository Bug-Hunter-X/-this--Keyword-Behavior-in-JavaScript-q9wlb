function myFunc() {
  console.log(this);
}

// Explicitly bind 'this' to avoid ambiguity
const obj = {
  myFunc: myFunc.bind({ myValue: 'Explicitly bound' }),
};

obj.myFunc(); // this will be { myValue: 'Explicitly bound' }

const boundFunc = myFunc.bind({ myValue: 'Bound this' });

boundFunc(); // this will be { myValue: 'Bound this' }

// Using arrow functions (lexical this)
const arrowFunc = () => {
  console.log(this); // this will inherit from the surrounding context
};

const arrowObj = {
  arrowFunc: arrowFunc,
};
arrowObj.arrowFunc();