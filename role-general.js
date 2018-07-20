let constants = require('constants');
let roleHarvester = require('role-harvester');
let roleUpgrader = require('role-upgrader');
let roleBuilder = require('role-builder');

module.exports = {
    /**
     * Handles the creep roles.
     */
    handleRoles: function () {
        for (let creepName in Game.creeps) {
            let creep = Game.creeps[creepName];
            let role = creep.memory.role;
            switch (role) {
                case constants.ROLE_HARVESTER:
                    roleHarvester.run(creep);
                    break;
                case constants.ROLE_UPGRADER:
                    roleUpgrader.run(creep);
                    break;
                case constants.ROLE_BUILDER:
                    roleBuilder.run(creep);
                    break;
                default:
                    creep.memory = constants.MEMORY_HARVESTER;
            }
        }
    }
};