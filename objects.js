// The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) { 
   return {
      radius, 
      draw: function() {}
   } 
} 

// Constructor function 
function Circle(radius) { 
    this.radius = radius; 
    this.draw = function() {}
} 
    
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
   
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                      
delete circle.location; 
                      
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)
                      
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) { 
   // Public member 
   this.radius = radius; 

   // Private member                       
   let defaultLocation = {};                      
}                       

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});

//MY NOTES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Factory Function - Use the return keyword

// function createCircle(radius) {
//   return {
//     radius, //key value pair that are properties
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }
//
// const circle = createCircle(1);

//Constructor Function - Use the 'this' keyword and use the new keyword

function Circle(radius) { //This is the parent function
  this.radius = radius //essential member

  let defaultLocation = { x:0, y:0 };

  this.getDefaultLocation = function (){
    return defaultLocation;
  };

  this.draw = function() { //essential member
    //defaultLocation
    //this.radius
    console.log('draw');
  }

  Object.defineProperty(this, 'defaultLocation',
    { get: function() {
        return defaultLocation;
      },
      set: function(value) {
        if (!value.x || !value.y)
          throw new Error ('Invalid location.');

        defaultLocation = value;
      }
    });
}

const circle = new Circle(1);

//Abstraction = Hide the details, and show only the essentials.

//Enumerating Properties
// for (let key in circle) {
//   if (typeof circle[key] !== 'function') // to enumerate all the members in an object
//     console.log(key, circle[key]);
// }
//
// const keys = Object.keys(circle); // to get all the keys in an object
// console.log(keys);
//
// if ('radius' in circle)  //to check for the existence of a property in an object
//   console.log ('Circle has a radius');

// Circle.apply({}, [1,2,3]);
// //If you wanted to pass multiple arguments- use an array
// Circle.call({}, 1)
// // These are the same ^ v
// const circle = new Circle(1);

// circle.location = { x:1 } //You can add properties on the fly
// //or
// const propertyName = 'center location';
// circle[propertyName] = { x:1 };
//
// delete circle.location

//Three things happen when using a new operator
//1 create an empty object.
//2 sets this to point to the object
//3 return that object from the function
//Note there's no explicit return statement

//Completely up to your own preference. Use what you want to create an object.

//There are built in constructor functions such as new String(); and new Boolean(); but we don't use those
//Take Away: Every object has a constructor property and that references the function that was used to create that object.

//Value Types are Primitive Types - Copied by their value

//Reference Types are Objects Functions and Arrays - copied by their reference
