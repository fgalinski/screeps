let constants = require('constants');

module.exports = {
    /**
     * Handles the spawning.
     */
    handleSpawning: function () {
        for (let spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];
            if (spawn.canCreateCreep(constants.SMALL_HARVESTER_PARTS) !== OK) {
                continue;
            }

            if (_(Game.creeps).size() >= constants.MAX_AMOUNT_HARVESTERS) {
                continue;
            }

            spawn.createCreep(constants.SMALL_HARVESTER_PARTS, undefined, constants.SMALL_HARVESTER_MEMORY);
        }
    }
};