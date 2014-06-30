# kimono-worldcup-api-wrapper #

npm API wrapper for [Kimono World Cup API](http://www.kimonolabs.com/worldcup/explorer)

## Install ##
	npm install kimono-worldcup-api-wrapper

## Dependencies ##
	- [q]: https://github.com/kriskowal/q-connection
	- [querystring]: https://github.com/Gozala/querystring
	- [request]: http://github.com/mikeal/request

## Usage ##

```javascript
//Include the package
var worldCup = require('kimono-worldcup-api-wrapper');

//Initialize with API Key
var worldCupApi = worldCup('*** Kimono API Key***');

worldCupApi.get.players().done(function(res){
	console.log(res);
});
```
## Endpoints ##

### Players ###

	worldCupApi.get.Players(filters(optional))
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response

```javascript
worldCupApi.get.players().done(function(res){
	console.log(res);
});
```
### Player ###
	worldCupApi.get.Player(id, filters(optional))
		- Required player ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response 
```javascript
worldCupApi.get.player('** players ID**').done(function(res){
	console.log(res);
});
```

### Teams ###
	worldCupApi.get.Teams(filters(optional))
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
```javascript
worldCupApi.get.players().done(function(res){
	console.log(res);
});
```
### Team ###
	worldCupApi.get.Team(id, filters(optional))
		- Required Team ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response

```javascript
worldCupApi.get.Teams().done(function(res){
	console.log(res);
});
```

### Matches ###
	worldCupApi.get.Matches(filters(optional))
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
	
### Match ###
	worldCupApi.get.Match(id, filters(optional))
		- Required Match ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response

### PlayerSeasonStats ###
	worldCupApi.get.player_season_stats(id(optional), filters(optional))
		- Optional Player ID
		- Takes Optional filters (ie '{ sort : position }')
	- Returns a promise with the API response
	
### Filters ###



