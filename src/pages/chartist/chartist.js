var Chartist = require('chartist');
var $ = require('jquery');


/**
 * 
 * PRIVATE FUNCTIONS
 * 
 */


/**
 * 
 * PUBLIC FUNCTIONS
 * 
 */

let data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
};

var render = function(target, d){
    new Chartist.Line('.ct-chart', data);
};


module.exports = {
    data,
    render
}