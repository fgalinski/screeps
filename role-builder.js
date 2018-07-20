module.exports = {
    /**
     * Runs the given creep as a builder.
     *
     * @param builder Creep
     */
    run: function (builder) {
        if (builder.carry.energy >= builder.carryCapacity) {
            builder.memory.building = true;
        }

        if (builder.memory.building) {
            if (builder.carry.energy <= 0) {
                builder.memory.building = false;
            }

            let closestConstructionSite = builder.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);
            let buildingResult = builder.build(closestConstructionSite);
            if (buildingResult !== OK) {
                switch (buildingResult) {
                    case ERR_NOT_IN_RANGE:
                        builder.moveTo(closestConstructionSite);
                        break;
                }
            }
        } else {
            let closestSource = builder.pos.findClosestByPath(FIND_SOURCES);
            let harvestResult = builder.harvest(closestSource);
            if (harvestResult !== OK) {
                switch (harvestResult) {
                    case ERR_NOT_IN_RANGE:
                        builder.moveTo(closestSource);
                        break;
                }
            }
        }
    }
};