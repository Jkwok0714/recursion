// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  
  var results = [];
  var body = document.body;
  var iterateBody = function(body) {
	  if (body.classList && body.classList.contains(className)) {
		  results.push(body);
	  }
		if (body.hasChildNodes()) {
			var child = body.childNodes[0];
			while (child) {
				iterateBody(child);
				child = child.nextSibling;
			}
		}
   }
   
   iterateBody(body);
   return results;

};
