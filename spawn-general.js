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

            if (this.spawnUpgrader(spawn)) {
                continue;
            }

            this.spawnBuilder(spawn);
        }
    },

    /**
     * Spawns a harvester if possible.
     *
     * @param spawn Spawn
     * @return boolean
     */
    spawnHarvester: function (spawn) {
        return this.spawn(
            spawn, constants.PARTS_SMALL_HARVESTER, constants.ROLE_HARVESTER, constants.MEMORY_HARVESTER,
            constants.MAX_AMOUNT_HARVESTERS
        );
    },

    /**
     * Spawns an upgrader if possible.
     *
     * @param spawn Spawn
     * @return boolean
     */
    spawnUpgrader: function (spawn) {
        return this.spawn(
            spawn, constants.PARTS_SMALL_UPGRADER, constants.ROLE_UPGRADER, constants.MEMORY_UPGRADER,
            constants.MAX_AMOUNT_UPGRADER
        );
    },

    /**
     * Spawns an upgrader if possible.
     *
     * @param spawn Spawn
     * @return boolean
     */
    spawnBuilder: function (spawn) {
        return this.spawn(
            spawn, constants.PARTS_SMALL_BUILDER, constants.ROLE_BUILDER, constants.MEMORY_BUILDER,
            constants.MAX_AMOUNT_BUILDERS
        );
    },

    /**
     * Spawns an creeps with the given parameters.
     *
     * @param spawn Spawn
     * @param parts array
     * @param role string
     * @param memory object
     * @param maxAmount int
     * @return boolean
     */
    spawn: function (spawn, parts, role, memory, maxAmount) {
        if (spawn.spawnCreep(parts, 'test', {dryRun: true}) !== OK) {
            return false;
        }

        if (_(Game.creeps).filter({memory: {role: role}}).size() >= maxAmount) {
            return false;
        }

        return (spawn.spawnCreep(parts, role + ' ' + Game.time.toString(), {memory: memory}) === OK);
    }
};