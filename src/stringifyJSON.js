// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

//    :(

var stringifyJSON = function(obj) {
    // your code goes here

    //Base cases
    if (obj === null) return 'null';

    if (typeof obj === 'number' || typeof obj === 'boolean') {
        return obj + '';
    } else if (typeof obj === 'string') {
        return '"' + obj + '"';
    }

    var result = [];

    //Array object
    if (Array.isArray(obj)) {
        if (obj.length === 0) {
            //Return if the array is empty
            return '[]';
        } else {
            //Iterate the array elements if not empty
            for (var i = 0; i < obj.length; i++) {
                result.push(stringifyJSON(obj[i]));
            }
            return '[' + result + ']';

        }
    }
	
	//Object object
    if (typeof obj === 'object') {
		//Iterate object's keys... should add nothing to list if it's empty
        for (var key in obj) {
			//Filter out functions and undefined stuff
            if (!(obj[key] === undefined || obj[key] instanceof Function))
                result.push('"' + key + '":' + stringifyJSON(obj[key]));
            
        }
        return '{' + result + '}';

    }

};