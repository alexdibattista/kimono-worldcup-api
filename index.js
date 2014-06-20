
var kworldcupapi = require('./lib/kimono-worldcup-api.js');


var kimonoWorldCup = kworldcupapi('');

var players = {};

kimonoWorldCup.get.players({'sort' : 'goals,1'}).done(function (res) {
  console.log(res);
});



