#kimono-worldcup-api-wrapper

npm API wrapper for [Kimono World Cup API ](http://www.kimonolabs.com/worldcup/explorer)


##Usage

```javascript
var worldCup = require('kimono-worldcup-api-wrapper');

var worldCupApi = worldCup('*** Kimono API Key***');

worldCupApi.get.players().done(function(res){
	console.log(res);
});
```



