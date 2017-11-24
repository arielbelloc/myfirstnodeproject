var util = require('util');

module.exports = {
    sum: sum, 
    substraction: substraction,
    multiplication: multiplication,
    division: division
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function sum(req, res) {
    var elementsToSum = JSON.parse(req.swagger.params.elementArray.value || null);

    var result = elementsToSum.reduce(operationSum, 0);
    function operationSum(a, b) {
        return a + b;
    }

    res.json(result);
}

function multiplication(req, res) {
    var elementsToSum = JSON.parse(req.swagger.params.elementArray.value || null);

    var result = elementsToSum.reduce(operationMultiplication, 1);
    function operationMultiplication(a, b) {
        return a * b;
    }

    res.json(result);
  }

function division(req, res) {
    var dividend = req.swagger.params.dividend.value;
    var divider = req.swagger.params.divider.value;

    var result = dividend / divider; 
    
    res.json(result);
}

function substraction(req, res) {
    var minuend = req.swagger.params.minuend.value;
    var subtrahend = req.swagger.params.subtrahend.value;
    
    var result = minuend - subtrahend;
    
    res.json(result);
}