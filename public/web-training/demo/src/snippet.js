/*------------------------------*/
/* Scope                        */
/*------------------------------*/

var messages = ['This', 'is', 'a', 'test'];

for (var i = 0; i < messages.length; i++) {
  setTimeout(function () {
    console.log(messages[i]);
  }, i * 1500);
}

const messages = ['This', 'is', 'a', 'test'];

for (let i = 0; i < messages.length; i++) {
  setTimeout(function () {
    console.log(messages[i]);
  }, i * 1500);
}

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

function blockScopeTest() {
  try {
    allert("Hello World!");
  } catch (err) {
    console.log(err);
  }
  console.log(err.message);
}

blockScopeTest();


/*------------------------------*/
/* Hoisting                     */
/*------------------------------*/

doSomething(123);
          
function doSomething(arg1) {
  console.log(arg1);
}

num = 6;
num + 7;
var num; 
/* gives no errors as long as num is declared*/

// Hoists only the declaration and not initialization
var x = 1; // Initialize x
console.log(x + ' ' + y);  //y is undefined
var y = 2;
//the above code and the below code are the same

var x = 1; // Initialize x
var y; // Initialize y
console.log(x + ' ' + y);  //y is undefined
y = 2; // Declare y

/*------------------------------*/
/* Confusing this               */
/*------------------------------*/
this.x = 9; // What does this do?
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX());

var retrieveX = module.getX;
console.log(retrieveX());

// Next example
this.x = 9;
var retrieveX = function() { return this.x; }
var module = {
  x: 81,
  getX: retrieveX
};

console.log(module.getX());
console.log(retrieveX());

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

retrieveX.apply(module, [1, 2]);
retrieveX.call(module, 1, 2);

<div id="output"></div>
<!-- Load Babel -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<!-- Your custom script here -->
<script type="text/babel">
const getMessage = () => 'Hello World';
document.getElementById('output').innerHTML = getMessage();
</script>
/*------------------------------*/
/* Basic Prime                  */
/*------------------------------*/
var primeNumbers = {};
function isPrime(n) {
  if (primeNumbers.hasOwnProperty(n)) {
    // from cache
    console.log('Reading from cache');
    return primeNumbers[n];
  }
  
  if (n <= 1) {
    primeNumbers[n] = false;
    return false;
  }
  
  if (n == 2 || n == 3) {
    primeNumbers[n] = true;
    return true;
  }
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      // prime
      primeNumbers[n] = false;
      return false;
    }
  }
  primeNumbers[n] = true;
  return true;
}

/*------------------------------*/
/* IIFE Prime                   */
/*------------------------------*/
var isPrime = (function() {
  var primeNumbers = {};
  return function (n) {
    if (primeNumbers.hasOwnProperty(n)) {
      // from cache
      console.log('Reading from cache');
      return primeNumbers[n];
    }

    if (n <= 1) {
      primeNumbers[n] = false;
      return false;
    }

    if (n == 2 || n == 3) {
      primeNumbers[n] = true;
      return true;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        // prime
        primeNumbers[n] = false;
        return false;
      }
    }
    primeNumbers[n] = true;
    return true;
  }
})();
/*------------------------------*/
/* Module pattern               */
/*------------------------------*/
var MyMath = (function() {
  var primeNumbers = {};
  var isPrime = function (n) {
    if (primeNumbers.hasOwnProperty(n)) {
      // from cache
      return primeNumbers[n];
    }

    if (n <= 1) {
      primeNumbers[n] = false;
      return false;
    }

    if (n == 2 || n == 3) {
      primeNumbers[n] = true;
      return true;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        // prime
        primeNumbers[n] = false;
        return false;
      }
    }
    primeNumbers[n] = true;
    return true;
  };

  var perfectSquares = {};
  var isPerfectSquare = function(n) {
    if (perfectSquares.hasOwnProperty(n)) {
      // from cache
      console.log('Reading from cache');
      return perfectSquares[n];
    }
    var result = false;
    if (n == 1 || n == 4)
      res = true;
    else {
      var root = Math.sqrt(n);
      result = (n == root * root);
    }
    return result;
  }

  return {
    isPrime,
    isPerfectSquare
  }
})();
console.log(MyMath.isPrime(4));
console.log(MyMath.isPerfectSquare(4));
/*------------------------------*/
/* Strict mode                  */
/*------------------------------*/
(function() {
  myVariable = 10;
})();
(function() {
  'use strict';
  myVariable1 = 10;
})();
(function() {
  'use strict';
  NaN = 0;
})();
(function() {
  delete Animal.prototype;
})();
(function() {
  'use strict';
  var a = {p: 1, p: 2};
})();
(function() {
  'use strict';
  function func(a, a, c) {}
})();
(function() {
  'use strict';
  var obj = {x: 1};
  var x = 10;
  with(obj) {
    console.log(x);
  }
})();
/*------------------------------*/
/* Class basic                  */
/*------------------------------*/
var Animal = function(name) {
  this.name = name;
}
Animal.prototype = {print: function() {
    console.log(this.name);
  }};

var Dog = function() {
  return Animal.call(this, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype); // 1. new Animal(); 2. Animal.prototype
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log('bark');
}
/*------------------------------*/
/* Class OOP                    */
/*------------------------------*/
var MyClass = (function () {
    // private static
    var nextId = 1;

    // constructor
    var cls = function () {
        // private
        var id = nextId++;
        var name = 'Unknown';
        this.place = "Hyderabad";
        // public (this instance only)
        this.getId = function () { return id; };

        this.getName = function () { return name; };
        this.setName = function (value) {
            if (typeof value != 'string')
                throw 'Name must be a string';
            if (value.length < 2 || value.length > 20)
                throw 'Name must be 2-20 characters long.';
            name = value;
        };
    };

    // public static
    cls.getNextId = function () {
        return nextId;
    };

    // public (shared across instances)
    cls.prototype = {
        announce: function () {
            alert('Hi there! My id is ' + this.getId() + ' and my name is "' + this.getName() + '"!\r\n' +
                  'The next fellow\'s id will be ' + MyClass.getNextId() + '!');
        }
    };

    return cls;
})();
//http://stackoverflow.com/questions/17392857/benefits-of-using-object-create-for-inheritance
//http://stackoverflow.com/questions/9074556/why-use-object-prototype-constructor-in-oop-javascript
/*------------------------------*/
/* Objects & Properties         */
/*------------------------------*/
var obj = {};
(function() {
  "use strict";
  obj.name = "Varun";
  console.log( obj.name );
  console.log(Object.isExtensible(obj));
  /*Object.preventExtensions(obj);
  delete obj.name;
  obj.url = "http://www.varunkumar.me"; // Exception in strict mode
  console.log(Object.isExtensible(obj));*/
  console.log(Object.getOwnPropertyDescriptor(obj, "name")); // Default descriptor for literal
  Object.defineProperty(obj, "url", {
    value: "www.varunkumar.me",
    writable: false,
    enumerable: true,
    configurable: true
  });
  //obj.url = ""; 

  (function(){
    var place = "Hyderabad";

    Object.defineProperty(obj, "place", {
      get: function(){ return place; },
      set: function(value){ place = value; }
    });
  })();
})();
Object.defineProperties(obj, {
  "prop1": {
    value: true,
    writable: false
  },
  "prop2": {
    value: "Some value",
    writable: false
  }
});
for (var k in obj) console.log(k);
var k = Object.keys(obj); for (var i = 0; i < k.length; i++) console.log(k[i]);
var k = Object.getOwnPropertyNames(obj); for (var i = 0; i < k.length; i++) console.log(k[i]); // Includes non-enumerable properties as well

"use strict"; // strict mode JS
// IIFE
(function () {
    const Person = (function () {
        // private static
        var nextId = 1;
        
        // constructor
        var person = function () {
            // private members
            var _id, _firstName, _lastName, _age;
            
            // public members (instance only)
            // defining a read-only property named id with default-value set. 
            Object.defineProperty(this, 'id', {
                value: nextId++,
                writable: false,
                enumerable: true
            });
            
            // defining a property named firstName using get and set methods. 
            Object.defineProperty(this, 'firstName', {
                get: function() { return _firstName; },
                set: function(value) { 
                    if (typeof value === "string") {
                        _firstName = value;
                    } else
                        throw new TypeError("Invalid argument. String type was expected");
                },
                enumerable: true
            });
            
            Object.defineProperty(this, 'lastName', {
                get: function() { return _lastName; },
                set: function(value) { 
                    if (typeof value === "string") {
                        _lastName = value;
                    } else
                        throw new TypeError("Invalid argument. String type was expected");
                },
                enumerable: true
            });
            
            Object.defineProperty(this, 'age', {
                get: function() { return _age; },
                set: function(value) { 
                    if (!isNaN(value))
                        _age = value;
                    else
                        throw new TypeError("Invalid argument. Number type was expected");
                },
                enumerable: true
            });
            
            // locking this object to make sure no memers are added / removed. Members are still writeable.
            Object.seal(this);
        };

        // public static. One can access with classname itslef
        person.getNextId = function () {
            return nextId;
        };

        var proto = {
            // public (shared across instances)
            clone : function() {
                // note all the properties must be enumerable for $.extend to work. JSON.stringify also depends on 'enumerable'
                // Set it explicitly to true. 
                return $.extend(true, new Person(), this);
            }
        };
        // freezing the prototype so that one can't add / remove methods through prototype.
        Object.freeze(proto);

        person.prototype = proto;

        return person;
    })();

    // freezing the class itself so that nobody changes the static members.
    Object.freeze(Person);


    var p1 = new Person();
    p1.firstName = "Varunkumar";
    p1.lastName = "Nagarajan";
    p1.age = 29;

    // this will result in error in strict mode but works fine in normal mode
    //p1.email = "xyz@gmail.com"; 
    //delete p1.firstName; // error
    console.log(JSON.stringify(p1));

    var p2 = p1.clone();
    //p2.email = "xyz@gmail.com";
    p2.firstName = "Arunkumar";

    console.log("Next id: " + Person.getNextId());
})();
