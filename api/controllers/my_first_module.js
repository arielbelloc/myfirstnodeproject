var util = require('util');
module.exports = {
  myfirstmodule: myfirstmodule
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function myfirstmodule(req, res) {
  var message = 'This is my first NodeJs Module';
  var myfirstmodule = util.format('My response is: "%s"', message);

  res.json(myfirstmodule);
}