var data = require('./data.js');
var R = require('ramda')

var titles = R.map(function(i){
  return i.title;
})(R.reverse(data.crazy))


module.exports = {
  data: data
}
