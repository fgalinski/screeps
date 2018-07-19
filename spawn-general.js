const SMALL_WORKER = [
    WORK, CARRY, MOVE, MOVE
];

module.exports = {
    handleSpawning: function () {
        for (let spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];
            if (spawn.canCreateCreep(SMALL_WORKER) !== OK) {
                continue;
            }

            spawn.createCreep(SMALL_WORKER);
        }
    }
};