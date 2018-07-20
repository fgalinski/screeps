let constants = require('constants');

module.exports = {
    /**
     * Handles the constructions.
     */
    handleConstruction: function () {
        for (let spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];
            let controllerLevel = spawn.room.controller.level;
            if (controllerLevel >= constants.CONTROLLER_LEVEL_FOR_ROADS) {
                this.buildRoadsFromSpawnToSources(spawn);
            }
        }
    },

    /**
     * Places construction sites for roads between the given spawn and all sources in the same room.
     *
     * @param spawn StructureSpawn
     * @return boolean
     */
    buildRoadsFromSpawnToSources: function (spawn) {
        let room = spawn.room;
        let sources = room.find(FIND_SOURCES);
        if (sources.length <= 0) {
            return false;
        }

        let result = false;
        let position = spawn.pos;
        for (let sourceName in sources) {
            let source = sources[sourceName];
            let pathToSource = position.findPathTo(source, {ignoreCreeps: true, ignoreRoads: true});
            let pathToSourceLength = pathToSource.length - 1;
            for (let index = 0; index < pathToSourceLength; ++index) {
                let path = pathToSource[index];
                if (room.lookForAt(LOOK_STRUCTURES, path.x, path.y).length > 0) {
                    continue;
                }

                if (room.createConstructionSite(path.x, path.y, STRUCTURE_ROAD) === OK) {
                    result = true;
                }
            }
        }

        position = room.controller.pos;
        let pathToController = position.findPathTo(source, {ignoreCreeps: true, ignoreRoads: true});
        let pathToControllerLength = pathToController.length - 1;
        for (let index = 0; index < pathToControllerLength; ++index) {
            let path = pathToController[index];
            if (room.lookForAt(LOOK_STRUCTURES, path.x, path.y).length > 0) {
                continue;
            }

            if (room.createConstructionSite(path.x, path.y, STRUCTURE_ROAD) === OK) {
                result = true;
            }
        }

        return result;
    }
};