module.exports = {
    /**
     * Runs the given creep as a upgrader.
     *
     * @param upgrader Creep
     */
    run: function (upgrader) {
        if (upgrader.carry.energy >= upgrader.carryCapacity) {
            upgrader.memory.upgrading = true;
        }

        if (upgrader.memory.upgrading) {
            if (upgrader.carry.energy <= 0) {
                upgrader.memory.upgrading = false;
            }

            let upgradingResult = upgrader.upgradeController(upgrader.room.controller);
            if (upgradingResult !== OK) {
                switch (upgradingResult) {
                    case ERR_NOT_IN_RANGE:
                        upgrader.moveTo(upgrader.room.controller);
                        break;
                }
            }
        } else {
            let closestSpawn = upgrader.pos.findClosestByPath(FIND_MY_SPAWNS);
            let transferResult = upgrader.withdraw(closestSpawn, RESOURCE_ENERGY);
            if (transferResult !== OK) {
                switch (transferResult) {
                    case ERR_NOT_IN_RANGE:
                        upgrader.moveTo(closestSpawn);
                        break;
                }
            }
        }
    }
};