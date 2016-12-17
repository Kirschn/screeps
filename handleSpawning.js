function handleSpawning(config) {
	var countedCreeps = {};
	for (creep in Game.creeps) {
		if (countedCreeps[Game.creeps[creep].memory.role] == undefined) {
			countedCreeps[Game.creeps[creep].memory.role] = 1;
		} else {
			countedCreeps[Game.creeps[creep].memory.role]++;
		}
	} 
	for (var currentRole in config.requiredCreeps) {
		if (countedCreeps[currentRole] < config.requiredCreeps[0]) {
			
		}
	}


}
module.exports = handleSpawning