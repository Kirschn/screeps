function handleRoles(config) {
	for (var creep in Game.creeps) {
		config.roleModules[Game.creeps[creep].memory.role].tickAction(Game.creeps[creep])
	}
}
module.exports = handleRoles;