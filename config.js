module.exports = {
		requiredCreeps: {
			harvester: 1,
			builder: 0,
			levelBuilder: 1,
			defender: 0
		},
		roleModules: {
			harvester: require("harvesterRole"),
			builder: require("builderRole"),
			levelBuilder: require("levelBuilder"),
			defender: require("defender"),
			
		}

}