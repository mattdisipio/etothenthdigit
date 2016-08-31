(function(){
	'use strict';

	const elimit = 25;


	/**
 	* Represents a formula for calculating the mathematical constant e to a given amount of digits.
 	* @param {int} limit - How many digits to calculate e to.
 	*/
	var calc = function(limit){
		if(!limit || limit > elimit || limit < 0){
					console.error('Please use a limit that is greater than 0 and less than ' + elimit + ' Provided limit: ',  limit)
					return;
				}

		var result =  ((Math.E * Math.pow(10, limit)) / Math.pow(10, limit)).toFixed(limit);
		console.log(result);
	};

	if(process.argv.length < 3){
		console.error('Please provide a limit. Usage: node e.js _limit_');
		return;
	}

	var commandLineLimit = process.argv[2];

	calc(commandLineLimit);	
})();