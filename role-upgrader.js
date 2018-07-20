module.exports = {
    /**
     * Runs the given creep as an upgrader.
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
            let closestSource = upgrader.pos.findClosestByPath(FIND_SOURCES);
            let harvestResult = upgrader.harvest(closestSource);
            if (harvestResult !== OK) {
                switch (harvestResult) {
                    case ERR_NOT_IN_RANGE:
                        upgrader.moveTo(closestSource);
                        break;
                }
            }
        }
    }
};