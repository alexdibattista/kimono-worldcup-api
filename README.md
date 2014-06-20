#kimono-worldcup-api-wrapper

npm API wrapper for [Kimono World Cup API ](http://www.kimonolabs.com/worldcup/explorer)

##Usage

```node
//Include the package
var worldCup = require('kimono-worldcup-api-wrapper');

//Initialize with API Key
var worldCupApi = worldCup('*** Kimono API Key***');

worldCupApi.get.players().done(function(res){
	console.log(res);
});
```
##Endpoints

###Players

	worldCupApi.get.Players(filters)
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response

```node
worldCupApi.get.players().done(function(res){
	console.log(res);
});
```
###Player
	worldCupApi.get.Player(id, filters)
		- Required player ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response 
```node
worldCupApi.get.player('** players ID**').done(function(res){
	console.log(res);
});
```

###Teams
	worldCupApi.get.Teams(filters)
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
```node
worldCupApi.get.players().done(function(res){
	console.log(res);
});
```
###Team
	worldCupApi.get.Team(id, filters)
		- Required Team ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
```node
worldCupApi.get.Teams().done(function(res){
	console.log(res);
});
```

###Matches
	worldCupApi.get.Matches(filters)
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
	
###Match
	worldCupApi.get.Match(id, filters)
		- Required Match ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
	
##Filters



