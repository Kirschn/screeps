var harvester = {
	getParts: function() {

		return [MOVE, CARRY, WORK];
	},
	tickAction: function(creep) {
		if(creep.carry.energy < creep.carryCapacity) {
		        var sources = creep.room.find(FIND_SOURCES);
		        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
		            creep.moveTo(sources[0]);
		        }
		    }
		    else {
		        if( creep.transfer(Game.spawns['Main_Spawn'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
		            creep.moveTo(Game.spawns['Main_Spawn']);
		        }
		    }
	}

};
module.exports = harvester;