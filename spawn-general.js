let constants = require('constants');

module.exports = {
    /**
     * Handles the spawning.
     */
    handleSpawning: function () {
        for (let spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];

            if (this.spawnHarvester(spawn)) {
                continue;
            }

            this.spawnUpgrader(spawn);
        }
    },

    /**
     * Spawns a harvester if possible.
     *
     * @param spawn Spawn
     * @return boolean
     */
    spawnHarvester: function (spawn) {
        if (spawn.spawnCreep(constants.PARTS_SMALL_HARVESTER, undefined, {dryRun: true}) !== OK) {
            return false;
        }

        if (_(Game.creeps).filter({memory: {role: constants.ROLE_HARVESTER}}).size() >= constants.MAX_AMOUNT_HARVESTERS) {
            return false;
        }

        spawn.spawnCreep(constants.PARTS_SMALL_HARVESTER, undefined, {memory: constants.MEMORY_HARVESTER});
        return true;
    },

    /**
     * Spawns an upgrader if possible.
     *
     * @param spawn Spawn
     * @return boolean
     */
    spawnUpgrader: function (spawn) {
        if (spawn.spawnCreep(constants.PARTS_SMALL_UPGRADER, undefined, {dryRun: true}) !== OK) {
            return false;
        }

        if (_(Game.creeps).filter({memory: {role: constants.ROLE_UPGRADER}}).size() >= constants.MAX_AMOUNT_UPGRADER) {
            return false;
        }

        spawn.createCreep(constants.PARTS_SMALL_UPGRADER, undefined, {memory: constants.MEMORY_UPGRADER});
        return true;
    }
};