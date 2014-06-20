/*
 * Kimono World Cup Api
 */
var host = 'http://worldcup.kimonolabs.com/api/',
    Q = require('q'),
    qs = require('querystring'),
    request = Q.denodeify(require('request'));

    kimonoWorldCup = function(apiKey) {
        
        var apiKey = '?apikey=' + apiKey;
        
        this.get = {};
        this.apiRequest = this.get.players = this.get.player = this.get.teams = this.get.team = this.get.clubs = this.get.club = this.matches = this.match = {};

        // Get all Players
        this.get.players = function (filters) {
          return apiRequest(host + 'players' + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        // Get Player by ID
        this.get.player = function (id, filters) {
          return apiRequest(host + 'player/' + id + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        // Get All Teams
        this.get.teams = function(filters) {
          apiRequest(host + 'teams' + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        //Get Team by ID
        this.get.team = function(id, filters) {
          apiRequest(host + 'team/' + id + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        // Get all clubs
        this.get.clubs = function(filters) {
          apiRequest(host + 'clubs' + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        // Get club by ID
        this.get.club = function(id, filters) {
          apiRequest(host + 'club/' + id + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        // Get all matches
        this.get.matches = function(filters) {
          apiRequest(host + 'matches' + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        // Get match by ID
        this.get.match = function(id, filters) {
          apiRequest(host + 'match/' + id + apiKey + ((filters) ? '&' + qs.stringify(filters) : ''));
        };

        apiRequest = function(url){
          var response = request(url);

          return response.then(function(response){return response;});


        };
    };

module.exports = kimonoWorldCup;