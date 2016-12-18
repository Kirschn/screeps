var levelBuilder = {
	getParts: function() {
		return [MOVE, CARRY, WORK];
	},
	tickAction: function(creep) {
		if (creep.memory.emptying == true) {
			if (creep.carry.energy !== 0) {
				creep.upgradeController(creep.room.controller);
			} else {
				creep.memory.emptying = false;
			}

		} else {
			if(creep.carry.energy < creep.carryCapacity) {
			            var sources = creep.room.find(FIND_SOURCES);
			            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
			                creep.moveTo(sources[1]);
			            }
			        }
			        else {
			            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
			                creep.moveTo(creep.room.controller);
			            } else {
			            	creep.memory.emptying = true;
			            }
			 }
		}
		
	}

};
module.exports = levelBuilder;