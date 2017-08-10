// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/* Definition and Usage
The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.

The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.

You should use document.body, element.childNodes, and element.classList

*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  
  var results = [];
  var body = document.body;
  
  //Iterate through the body
  //If the nodes are matching class
  //	Add to results
  //	If the nodes are lists themselves
  //		recursively iterate them
  //Return results

};
