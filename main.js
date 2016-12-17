var config = require("config");
var handleRoles = require("handleRoles");
var handleSpawning = require("handleSpawning");
module.exports.loop = function() {
	handleRoles(config);
	handleSpawning(config);
	console.log("tick");
}