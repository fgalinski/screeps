let constants = require('constants');

module.exports = {
    /**
     * Handles the spawning.
     */
    handleSpawning: function () {
        for (let spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];
            if (spawn.canCreateCreep(constants.PARTS_SMALL_HARVESTER) !== OK) {
                continue;
            }

            this.spawnHarvester(spawn);
            this.spawnUpgrader(spawn);
        }
    },

    /**
     * Spawns a harvester if possible.
     *
     * @param spawn Spawn
     */
    spawnHarvester: function (spawn) {
        if (_(Game.creeps).filter({memory: {role: constants.ROLE_HARVESTER}}).size() >= constants.MAX_AMOUNT_HARVESTERS) {
            return;
        }

        spawn.createCreep(constants.PARTS_SMALL_HARVESTER, undefined, constants.MEMORY_HARVESTER);
    },

    /**
     * Spawns an upgrader if possible.
     *
     * @param spawn Spawn
     */
    spawnUpgrader: function (spawn) {
        if (_(Game.creeps).filter({memory: {role: constants.ROLE_UPGRADER}}).size() >= constants.MAX_AMOUNT_UPGRADER) {
            return;
        }

        spawn.createCreep(constants.PARTS_SMALL_UPGRADER, undefined, constants.MEMORY_UPGRADER);
    }
};