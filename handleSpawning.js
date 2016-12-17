function handleSpawning(config) {
	var countedCreeps = {};
	for (var creep in Game.creeps) {
		if (countedCreeps[Game.creeps[creep].memory.role] == undefined) {
			countedCreeps[Game.creeps[creep].memory.role] = 1;
		} else {
			countedCreeps[Game.creeps[creep].memory.role]++;
		}
	} 
	for (var currentRole in config.requiredCreeps) {
		console.log("Testing Spawining for Role " + currentRole);
		if (countedCreeps[currentRole] == undefined) {
			countedCreeps[currentRole] = 0;
		}
		console.log(countedCreeps[currentRole]);
		console.log(config.requiredCreeps[currentRole]);
		if (countedCreeps[currentRole] < config.requiredCreeps[currentRole]) {
			console.log("Spawining, role: " +currentRole)
			
				console.log(Game.spawns.Main_Spawn.createCreep(config.roleModules[currentRole].getParts(), currentRole + (countedCreeps[currentRole] + 1), {
					role: currentRole
				}));
			

		}
	}


}
module.exports = handleSpawning