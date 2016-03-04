statsmodel_decision_tree.js

var intro = prompt("Got a question? Want to know what stats model to use? Never fear! statsmodel_decision_tree is here!")

var Q1 = prompt("Does this problem invovle comparing means or testing relationships? ('comparing means' or 'testing relationships')").toLowerCase();
switch(Q1) {
	case 'comparing means':
		console.log("-some general info about comparing means, invovles t-tests, ANOVA, etc. factors, levels-");
		var Q2 = prompt("Does your problem invovle more than two means? (YES or NO) (i.e., Your independent variable has no more than 2 levels. e.g., black or white NOT red or blue or green.)").toLowerCase()
		if (Q2 === 'yes') {
			var Q3 = prompt("Is one of the means the population mean? (YES or NO)").toLowerCase()
			if (Q3 === 'yes') {
				console.log("Use a Single-Sample t-test.")
			}
			else { //Need to verify
				var Q4 = prompt("Are the samples related?").toLowerCase()
				if (Q4 === 'yes') {
					console.log("Use Related Samples t-test.")
				} else {
					console.log("Use Independent Samples t-test.")
				}
			}
		}
		else { //Need to verify, add MANOVA, etc.
			var Q3 = prompt("Is one of your independent variables continous? (YES or NO).").toLowerCase()
			if (Q3 === 'yes') {
				console.log("Use ANCOVA.") 
			} else {
				console.log("Use ANOVA.")
			}
		}

	case 'testing relationships':  //Need to verify
	console.log("-some general info about testing relationships, no IV, DV, predictor variables")
	var Q2 = prompt("Does your problem contain catergorical variables?").toLowerCase()
	if (Q2 === 'yes') {
		var Q3 = prompt("How many variables?").toLowerCase
		switch(Q3) {
			case 'both':
			console.log("Use chi-square.")
		}
	} else {
		var Q3 = prompt("Do you have predictors?").toLowerCase
		if (Q3 === 'yes') {
			console.log("Use regression.") //Add options for linear, logistic
		} 
		else {
			console.log("Use correlation.")
		}
	}
}
