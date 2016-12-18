module.exports = {
		requiredCreeps: {
			harvester: 3,
			builder: 1,
			levelBuilder: 4,
			defender: 0
		},
		roleModules: {
			harvester: require("harvesterRole"),
			builder: require("builderRole"),
			levelBuilder: require("levelBuilder"),
			defender: require("defender"),
			
		}

}