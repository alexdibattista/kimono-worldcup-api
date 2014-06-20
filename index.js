
var kworldcupapi = require('./lib/kimono-worldcup-api.js');


var kimonoWorldCup = kworldcupapi('41e39ec62f84f97bcd923b97ca4b359f');

var players = {};

kimonoWorldCup.get.players({'sort' : 'goals,1'}).done(function (res) {
  console.log(res);
});



