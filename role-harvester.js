module.exports = {
    /**
     * Runs the given creep as a harvester.
     *
     * @param harvester Creep
     */
    run: function (harvester) {
        if (harvester.carry.energy <= 0) {
            harvester.memory.working = true;
        }

        if (harvester.memory.working) {
            if (harvester.carry.energy >= harvester.carryCapacity) {
                harvester.memory.working = false;
            }

            let closestSource = harvester.pos.findClosestByPath(Source);
            let harvestResult = harvester.harvest(closestSource);
            if (harvestResult !== OK) {
                switch (harvestResult) {
                    case ERR_NOT_IN_RANGE:
                        harvester.moveTo(closestSource);
                        break;
                }
            }
        } else {
            let closestSpawn = harvester.pos.findClosestByPath(Spawn);
            let transferResult = harvester.withdraw(closestSpawn, RESOURCE_ENERGY);
            if (transferResult !== OK) {
                switch (transferResult) {
                    case ERR_NOT_IN_RANGE:
                        harvester.moveTo(closestSpawn);
                        break;
                }
            }
        }
    }
};