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

// Create scope
// Expose inner function
// Invoke immediately so that there is only instance of isPrime

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

// Callback hell
function request(url, successCallback, failureCallback) {
  // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        successCallback(response);
      }
      else {
        failureCallback(req.statusText);
      }
    };

    // Handle network errors
    req.onerror = function() {
      failureCallback(Error("Network Error"));
    };
}

var form = document.querySelector('form')
form.onsubmit = function(submitEvent) {
  var name = document.querySelector('input').value
  request('http://example.com/post', function(response) {
    // do something
  }, function(error) {
    // do something else
  })
}

// 1. Name your functions
var form = document.querySelector('form')
form.onsubmit = function formSubmit(submitEvent) {
  var name = document.querySelector('input').value
  request('http://example.com/post', function postResponse(response) {
    
  }, function postError(err) {

  });
}

// 2. Keep your code shallow
function formSubmit(submitEvent) {
  var name = document.querySelector('input').value
  request('http://example.com/post', postResponse, postError)
}

function postResponse(response) {
  
}

function postError(err) {
  
}

document.querySelector('form').onsubmit = formSubmit

// 3. Modularize
// ------------------
// How is it different from Events?
var img1 = document.querySelector('#imgOperaRemote');

img1.addEventListener('load', function() {
  console.log("Image loaded");
});

img1.addEventListener('error', function() {
  console.log("Error");
});
//--------------------
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */true) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
//--------------
function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
} // => fetch

(function() {
  var promise1 = fetch('/demo/data/story.json');

  promise1.then(function(response) {
    console.log("Success!", response);
  }, function(error) {
    console.error("Failed!", error);
  });

  promise1.then(function(response) {
    console.log("Reading the response again: ", response);
  })
}());

promise1.then(function(response) {
  console.log("Reading the response again: " + response);
})

// Chaining
var promise = new Promise(function(resolve, reject) {
  resolve(1);
}); // Promise.resolve(1); // self resolving promise

promise.then(function(val) {
  consol.log(val); // 1
  return val + 2; 
}).then(function(val) {
  console.log(val); // 3
}, function(err) {
  console.error("Chained promise: " + err);
});

// then method will return a thenable object. 
// If you are returning non-promise, it will be resolved immediately.
// If you are returning promise, it will be resolved on resolution of the returned promise.
// If an exception is thrown, it will be rejected immediately.

promise
  .then(val => val + 2)
  .then(val => console.log(val), err => console.error(err));

promise
  .then(val => val + 2)
  .then(console.log, console.error);

fetch('/demo/data/story.json')
  .then(res => res.json())
  .then(res => console.log('Yay JSON!', res));

function getJSON(url) {
  return fetch(url).then(res => res.json());
}

var stroryPromise = getJSON('/demo/data/story.json')
var chapterPromise = stroryPromise.then(story => getJSON('/demo/data/' + story.chapterUrls[0]));

chapterPromise.then(chapter1 => console.log('Got chapter 1!', chapter1));

var storyPromise;
function getChapter(i) {
  storyPromise = storyPromise || getJSON('/demo/data/story.json');

  return storyPromise.then(story => getJSON('/demo/data/' + story.chapterUrls[i]));
}

// and using it is simple:
getChapter(0)
 .then(chapter => {
  console.log(chapter);
  return getChapter(1);
}).then(function(chapter) {
  console.log(chapter);
});

// Error handling
fetch('/demo/data/story.json').then(res => {
  console.log('Success!', res);
}).catch(function(error) {
  console.log('Failed!', error);
});

// Catch is not equal to the below code
fetch('/demo/data/story.json').then(response => {
  console.log('Success!', response);
}, function(error) {
  console.log('Failed!', error);
});

// Equivalent of Catch
fetch('/demo/data/story.json').then(response => {
  throw new Error('Intentional error');
  console.log('Success!', response);
}).then(undefined, function(error) {
  console.log('Failed!', error);
});

asyncThing1().then(function() {
  return asyncThing2();
}).then(function() {
  return asyncThing3();
}).catch(function(err) {
  return asyncRecovery1();
}).then(function() {
  return asyncThing4();
}, function(err) {
  return asyncRecovery2();
}).catch(function(err) {
  console.log("Don't worry about it");
}).then(function() {
  console.log("All done!");
});

function addHtmlToPage(html) {
  var ele = document.createElement('div');
  ele.innerHTML = html;
  document.body.appendChild(ele);
}

function addTextToPage(txt) {
  var ele = document.createElement('div');
  ele.textContent = txt;
  document.body.appendChild(ele);
}

function addSpinner() {
  addHtmlToPage('<img class="spinner" src="http://opengraphicdesign.com/wp-content/uploads/2009/01/loader64.gif"/>');
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

var chapterUrls = [];
addSpinner();
getJSON('/demo/data/story.json').then(function(story) {
  addHtmlToPage(story.heading);
  chapterUrls = story.chapterUrls;
  return getJSON('/demo/data/' + chapterUrls[0]);
}).then(function(chapter) {
  addHtmlToPage(chapter.html);
  return getJSON('/demo/data/' + chapterUrls[1]);
}).then(function(chapter) {
  addHtmlToPage(chapter.html);
  // And we're all done!
  addTextToPage("All done");
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  // Always hide the spinner
  hideSpinner();
});

// Loop
getJSON('/demo/data/story.json').then(function(story) {
  addHtmlToPage(story.heading);
  for(var i = 0; i < story.chapterUrls.length; i++) {
    var chapterUrl = story.chapterUrls[i];
    // Fetch chapter
    getJSON('/demo/data/' + chapterUrl).then(function(chapter) {
      // and add it to the page
      addHtmlToPage(chapter.html);
    });
  };
}).then(function() {
  // And we're all done!
  addTextToPage("All done");
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  // Always hide the spinner
  hideSpinner();
});

// Loop with Promise
getJSON('/demo/data/story.json').then(function(story) {
  addHtmlToPage(story.heading);
  var sequence = Promise.resolve();
  story.chapterUrls.forEach(function(chapterUrl) {
    // Fetch chapter
    sequence = sequence.then(function() {
      return getJSON('/demo/data/' + chapterUrl).then(function(chapter) {
        // and add it to the page
        addHtmlToPage(chapter.html);
      });
    });
  });
  return sequence;
}).then(function() {
  // And we're all done!
  addTextToPage("All done");
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  // Always hide the spinner
  hideSpinner();
});

// Parallel
getJSON('/demo/data/story.json').then(function(story) {
  addHtmlToPage(story.heading);
  var promises = [];
  story.chapterUrls.forEach(function(chapterUrl) {
    // Fetch chapter
    promises.push(getJSON('/demo/data/' + chapterUrl));
  });
  return Promise.all(promises);
}).then(function(chapters) {
  for (var i = 0; i < chapters.length; i++) {
    addHtmlToPage(chapters[i].html);
  }
}).then(function() {
  // And we're all done!
  addTextToPage("All done");
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  // Always hide the spinner
  document.querySelector('.spinner').style.display = 'none';
});

// Log fetch with promises
function logFetch(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text);
    }).catch(err => {
      console.error('fetch failed', err);
    });
}

async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  } catch (err) {
    console.log('fetch failed', err);
  }
}

// wait ms milliseconds
function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function hello() {
  await wait(500);
  return 'world';
}

// Avoid being too sequential
async function series() {
  await wait(500);
  await wait(500);
  return "done!";
}

async function parallel() {
  const wait1 = wait(500);
  const wait2 = wait(500);
  await wait1;
  await wait2;
  return "done!";
}